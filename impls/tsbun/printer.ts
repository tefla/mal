import {AstVisitor} from "./reader.ts";

export const pr_str = (exp: any): string => {
  if (exp instanceof Array) {
    return `( ${exp.map(pr_str).join(" ")} )`;
  }
  return exp.toString();
}
const toStringChildren = () => { }

export const pr_str_antlr = (exp: any) => {
  const ast = new AstVisitor();
  const node = ast.visit(exp);

  const res = node.eval();

  return res.toString()
}