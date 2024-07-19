import tispVisitor from "./parser/tispVisitor.ts";
import type {RuleNode, TerminalNode} from "antlr4";
import type {TispContext} from "./parser/tispParser.ts";
import {
  ArrayContext,
  AtomContext,
  IdContext,
  ListContext,
  MapContext, NumberContext, OpContext,
  S_exprContext, SexpAtomContext, SexpListContext,

} from "./parser/tispParser.ts";
import {
  last
} from "lodash/fp"

export const pr_str = (exp: any): string => {
  if(exp instanceof Array) {
    return `( ${exp.map(pr_str).join(" ")} )`;
  }
  return exp.toString();
}
const toStringChildren = ()
abstract class AstNode {
  abstract toString(): string;
  abstract eval(): any;
  abstract toJson(): any;

}
const context = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  '*': (a: number, b: number) => a * b,
  '/': (a: number, b: number) => a / b,
};

class ArrayType extends Array {
  toString(): string {
    return `[ ${this.map(node => node.toString()).join(" ")} ]`;
  }
}
class MapType extends Object {
  toString(): string {
    return `{ ${Object.entries(this).map(([key, value]) => `${key} ${value.toString()}`).join(" ")} }`;
  }
  static from(arr: any[]): MapType {
    const obj = new MapType();
    for(let i = 0; i < arr.length; i++) {
      obj[arr[i][0]] = arr[i][1];
    }
    return obj;
  }
}
class AtomNode extends AstNode {
  constructor(public value: any) {
    super();
  }
  toString() {
    return this.value;
  }
  eval() {
    return this.value;
  }
  toJson(): any {
    return {type: "atom", value: this.value}
  }
}
class ListNode extends AstNode {
  constructor(public elements: AstNode[]) {
    super();
  }
  toString() {
    return `(${this.elements.map(node => node.toString()).join(" ")})`;
  }
  toJson(): any {
    return {type: "list", value: this.elements.map(node => node.toJson())}
  }

  eval() {
    if(this.elements.length === 0) return this;
      // Get the first element of the list
      const fn = context[this.elements[0].eval()];
      if(!fn) throw new Error(`Unknown function ${this.elements[0].eval()}`);
      // Get the rest of the elements
      const args = this.elements.slice(1).map(node => node.eval());
      console.log(fn, args)
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
    const res =this.elements.map(node => node.eval());
    console.log(res)
    return ArrayType.from(res)
  }
  toJson(): any {
    return {type: "array", value: this.elements.map(node => node.toJson())}

  }
}
class MapNode extends AstNode {
  constructor(public elements: AstNode[]) {
    super();
  }
  toString() {
    console.log("ELEMENTS:",this.elements)
    return `{ ${this.elements.map(node => {
      console.log("NODE:",node)
      node.toString()
    }).join(" ")} }`;
  }
  eval() {
    return MapType.from(this.elements.map(node => node.eval()));
  }
  toJson(): any {
    return {type: "map", value: this.elements.map(node => node.toJson())}
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
  toJson(): any {
    return {type: "key", key: this.key, value: this.value.toJson()}
  }
}
class TispNode extends AstNode {
  constructor(public s_expr_list: AstNode[]) {
    super();
  }
  toString() {
    console.log(this.s_expr_list)
    return this.s_expr_list.map(node => node.toString()).join(" ");
  }
  eval() {
    return last(this.s_expr_list.map(node => node.eval()));
  }
  toJson(): any {
    return {type: "tisp", value: this.s_expr_list.map(node => node.toJson())}
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
    return last(this.children.map(node => node.eval()));

  }
  toJson(): any {
    return {type: "sexp", value: this.children.map(node => node.toJson())}
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
  visitSexpAtom = (ctx: SexpAtomContext): AstNode => {
    return this.visit(ctx.atom());
  }
  visitSexpList = (ctx: SexpListContext): SExprNode => {
    return new SExprNode(ctx.children.map(child => this.visit(child)))
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
  console.log(node)
  const res = node.eval();

  return res.toString()
}