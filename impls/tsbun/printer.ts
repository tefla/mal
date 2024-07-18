import tispVisitor from "./parser/tispVisitor.ts";
import type {RuleNode, TerminalNode} from "antlr4";
import type {TispContext} from "./parser/tispParser.ts";
import {
  ArrayContext,
  AtomContext,
   IdContext,
  ListContext,
  MapContext, NumberContext, OpContext,
  S_exprContext,

} from "./parser/tispParser.ts";


export const pr_str = (exp: any): string => {
  if(exp instanceof Array) {
    return `( ${exp.map(pr_str).join(" ")} )`;
  }
  return exp.toString();
}
abstract class AstNode {
  abstract toString(): string;
  abstract eval(): any;
}
const context = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  '*': (a: number, b: number) => a * b,
  '/': (a: number, b: number) => a / b,
};

class AtomNode extends AstNode {
  constructor(public value: any) {
    super();
  }
  toString() {
    return this.value;
  }
  eval() {
    console.log("VALUE", this.value, typeof this.value)
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
  eval() {
      // Get the first element of the list
      const fn = context[this.elements[0].eval()];
      // Get the rest of the elements
      const args = this.elements.slice(1).map(node => node.eval());
      console.log("ARGS", args)
      return fn(...args);
  }
}
class ArrayNode extends AstNode {
  constructor(public elements: AstNode[]) {
    super();
  }
  toString() {
    return `[ ${this.elements.map(node => node.toString()).join(" ")} ]`;
  }
  eval() {
    return this.elements.map(node => node.eval());
  }
}
class MapNode extends AstNode {
  constructor(public elements: AstNode[]) {
    super();
  }
  toString() {
    return `{ ${this.elements.map(node => node.toString()).join(" ")} }`;
  }
  eval() {
    return this.elements.map(node => node.eval());
  }
}
class KeyNode extends AstNode {
  constructor(public key: string, public value: AstNode) {
    super();
  }
  toString() {
    return `${this.key} ${this.value.toString()}`;
  }
  eval(): any {
    return { [this.key]: this.value.eval() };
  }
}
class TispNode extends AstNode {
  constructor(public s_expr_list: AstNode[]) {
    super();
  }
  toString() {
    return this.s_expr_list.map(node => node.toString()).join(" ");
  }
  eval() {
    return this.s_expr_list.map(node => node.eval());
  }
}
class SExprNode extends AstNode {
  constructor(public children: AstNode[]) {
    super();
  }

  toString() {
    return this.children.map(node => node.toString()).join(" ");
  }
  eval(): any {
    return this.children.map(node => node.eval());

  }
}

class AstVisitor extends tispVisitor<AstNode> {
  visitTisp = (ctx: TispContext): TispNode =>{
    return new TispNode(ctx.s_expr_list().map(exp => this.visit(exp)));
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
  visitS_expr = (ctx: S_exprContext): SExprNode => {
    return new SExprNode(ctx.children.map(child => this.visit(child)));
  }
  visitId= (ctx: IdContext): AtomNode => {
    return new AtomNode(ctx.getText());
  }
  visitNumber = (ctx: NumberContext): AtomNode => {
    const numStr = ctx.getText();
    if(numStr.includes(".")) {
      return new AtomNode(parseFloat(numStr));
    } else {
      return new AtomNode(parseInt(numStr));
    }
  }
  visitOp = (ctx: OpContext): AtomNode => {
    return new AtomNode(ctx.getText());
  }
}

export const pr_str_antlr = (exp: any) => {
  const ast = new AstVisitor();
  const node = ast.visit(exp);
  const res = node.eval();
  console.log(res)
  console.log(node.toString())
  return res

}