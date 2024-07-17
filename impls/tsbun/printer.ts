import tispVisitor from "./parser/tispVisitor.ts";
import type {TispContext} from "./parser/tispParser.ts";
import {AtomContext, AtomExprContext, ListContext, ListExprContext} from "./parser/tispParser.ts";
import type {RuleNode} from "antlr4";
import type ParseTree from "antlr4/tree/ParseTree";
import {tree} from "antlr4";

export const pr_str = (exp: any): string => {
  if(exp instanceof Array) {
    return `( ${exp.map(pr_str).join(" ")} )`;
  }
  return exp.toString();
}

class PrintVisitor extends tispVisitor<string> {

  visitTisp(ctx: TispContext) {
    console.write("visitTisp");
    return "visitTisp";
  }
  visitAtom(ctx: AtomContext){
    console.write("visitTisp");
    return "visitAtom"
  }
  visitAtomExpr(ctx: AtomExprContext){
    console.write("visitTisp");
    return "visitAtomExpr"
  }
  visitListExpr(ctx: ListExprContext){
    console.write("visitTisp");
    return "visitListExpr"
  }
  visitList(ctx: ListContext){
    console.write("visitTisp");
    return "visitList"
  }
}
export const pr_str_antlr = (exp: any) => {
  const visitor = new PrintVisitor();
  //console.log(exp)
  return visitor.visit(exp);

}