import tispVisitor from "./parser/tispVisitor.ts";
import type {RuleNode, TerminalNode} from "antlr4";
import type {TispContext} from "./parser/tispParser.ts";
import {ArrayContext, AtomContext, ListContext, MapContext, S_exprContext} from "./parser/tispParser.ts";


export const pr_str = (exp: any): string => {
  if(exp instanceof Array) {
    return `( ${exp.map(pr_str).join(" ")} )`;
  }
  return exp.toString();
}
abstract class AstNode {

}
class AtomNode extends AstNode {
  constructor(public value: string) {
    super();
  }
  toString() {
    return this.value;
  }
}
class ListNode extends AstNode {
  constructor(public elements: AstNode[]) {
    super();
  }
  toString() {
    return `(${this.elements.map(node => node.toString()).join(" ")})`;
  }
}
class ArrayNode extends AstNode {
  constructor(public elements: AstNode[]) {
    super();
  }
  toString() {
    return `[ ${this.elements.map(node => node.toString()).join(" ")} ]`;
  }
}
class MapNode extends AstNode {
  constructor(public elements: AstNode[]) {
    super();
  }
  toString() {
    return `{ ${this.elements.map(node => node.toString()).join(" ")} }`;
  }
}
class KeyNode extends AstNode {
  constructor(public key: string, public value: AstNode) {
    super();
  }
  toString() {
    return `${this.key} ${this.value.toString()}`;
  }
}
class TispNode extends AstNode {
  constructor(public s_expr_list: AstNode[]) {
    super();
  }
  toString() {
    return this.s_expr_list.map(node => node.toString()).join(" ");
  }
}
class SExprNode extends AstNode {
  constructor(public children: AstNode[]) {
    super();
  }
  toString() {
    return this.children.map(node => node.toString()).join(" ");
  }
}

class AstVisitor extends tispVisitor<AstNode> {
  visitS_expr = (ctx: S_exprContext): SExprNode => {
    return new SExprNode(ctx.children.map(child => this.visit(child)));
  }
  visitTisp = (ctx: TispContext): TispNode =>{
    return new TispNode(ctx.s_expr_list().map(exp => this.visit(exp)));
  }
  visitAtom = (ctx: AtomContext): AtomNode => {
    return new AtomNode(ctx.getText());
  }
  visitList = (ctx: ListContext): ListNode => {
    return new ListNode(ctx.s_expr_list().map(child => this.visit(child)))
  }
  visitArray = (ctx: ArrayContext): ArrayNode => {
    return new ArrayNode(ctx.s_expr_list().map(child => this.visit(child)))
  }
  visitMap = (ctx: MapContext): MapNode => {
    return new MapNode(ctx.s_expr_list().map(child => this.visit(child)))
  }
}

export const pr_str_antlr = (exp: any) => {
  const ast = new AstVisitor();
  const node = ast.visit(exp);
  return node.toString()

}