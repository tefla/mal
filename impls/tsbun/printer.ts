import tispVisitor from "./parser/tispVisitor.ts";
import type {TispContext} from "./parser/tispParser.ts";
import {AtomContext, AtomExprContext, ListContext, ListExprContext} from "./parser/tispParser.ts";


export const pr_str = (exp: any): string => {
  if(exp instanceof Array) {
    return `( ${exp.map(pr_str).join(" ")} )`;
  }
  return exp.toString();
}

class PrintVisitor extends tispVisitor<string> {

  visitTisp(ctx: TispContext): string {
    console.log("visitTisp")
    return this.visitChildren(ctx.);
  }


}
export const pr_str_antlr = (exp: any) => {
  const visitor = new PrintVisitor();
  //console.log(exp)
  return visitor.visit(exp);

}