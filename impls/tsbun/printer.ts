import tispVisitor from "./parser/tispVisitor.ts";


export const pr_str = (exp: any): string => {
  if(exp instanceof Array) {
    return `( ${exp.map(pr_str).join(" ")} )`;
  }
  return exp.toString();
}

class PrintVisitor extends tispVisitor<string> {
  visitAtom(ctx) {
    return ctx.getText();
  }
  visitList(ctx) {
    return `( ${ctx.s_expr().map(this.visitS_expr).join(" ")} )`;
  }
  visitArray(ctx) {
    return `[ ${ctx.s_expr().map(this.visitS_expr).join(" ")} ]`;
  }
  visitMap(ctx) {
    return `{ ${ctx.s_expr().map(this.visitS_expr).join(" ")} }`;
  }
}
export const pr_str_antlr = (exp: any) => {
  const visitor = new PrintVisitor();
  return visitor.visit(exp);
}