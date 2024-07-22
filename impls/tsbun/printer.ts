import {AstVisitor} from "./reader.ts";


export const pr_str_antlr = (node: any, print_readably=false) => {
  return node.toString()
}