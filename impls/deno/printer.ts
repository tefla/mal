import { AstVisitor } from "./reader.ts";
import {Node, StringType, type TispType} from "./types.ts";

export const prStr = (v: TispType, printReadably = true): string => {
  switch (v.type) {
    case Node.List:
        return `(${v.elements.map(v => prStr(v, printReadably)).join(" ")})`;
    case Node.Vector:
        return `[${v.elements.map(v => prStr(v, printReadably)).join(" ")}]`;
    case Node.HashMap:
        let result = "{";
        for (const [key, value] of v.entries()) {
            if (result !== "{") {
                result += " ";
            }
            result += `${prStr(key, printReadably)} ${prStr(value, printReadably)}`;
        }
        result += "}";
        return result;
    case Node.Number:
    case Node.Symbol:
    case Node.Boolean:
        return `${v.value}`;
    case Node.String:
        if (printReadably) {
            const str = v.value
                .replace(/\\/g, "\\\\")
                .replace(/"/g, '\\"')
                .replace(/\n/g, "\\n");
            return `"${str}"`;
        } else {
            return v.value;
        }
    case Node.Nil:
        return "nil";
    case Node.Keyword:
        return `:${v.value}`;
    case Node.Function:
        return "#<function>";
    case Node.Atom:
        return `(atom ${prStr(v.value, printReadably)})`;
    default:
        if(v instanceof Error){
          return prStr(new StringType(v.message), printReadably);
        }
        return v.toString();
  }
}
export const pr_str_antlr = prStr;
