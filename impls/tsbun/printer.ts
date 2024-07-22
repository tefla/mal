import { AstVisitor } from "./reader.ts";
import { Node, type TispType } from "./types.ts";


export const pr_str_antlr = (node: TispType, print_readably = true) => {
  switch (node.type) {
    case Node.List:
      return `(${node.elements.map(n => pr_str_antlr(n, print_readably)).join(" ")})`;
    case Node.Vector:
      return `[${node.elements.map(n => pr_str_antlr(n, print_readably)).join(" ")}]`;
    case Node.String:
      if (print_readably) {
        const escaped = node.value
          .replace(/\\/g, '\\\\')
          .replace(/"/g, '\\\"')
          .replace(/\n/g, '\\n')
        //.replace(/\(/g, "\\(")
        //.replace(/\)/g, "\\)")
        return `"${escaped}"`;
      } else {
        return node.value;
      }
    case Node.Nil:
      return "nil";
  }

  return node.toString()
}