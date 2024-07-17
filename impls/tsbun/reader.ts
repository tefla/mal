import antlr4 from "antlr4";
import tispLexer from "./parser/tispLexer.ts";
import tispParser from "./parser/tispParser.ts";


class Reader {
  private pos = 0;
  constructor(private tokens: string[]) {  }
  next(){
    const ret = this.peek();
    this.pos += 1;
    return ret;
  }
  peek(){
    return this.tokens[this.pos];
  }
}
export const read_str_antlr = (input: string) => {
  const chars = new antlr4.CharStream(input);
  const lexer = new tispLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new tispParser(tokens);
  const tree = parser.tisp();
  return tree;
}
export const read_str = (input: string) => {
  const tokens = tokenize(input);
  const reader = new Reader(tokens);
  return read_form(reader);
}

const tokenize = (input: string) => {
  const tok_regex = /[\s,]*(~@|[\[\]{}()'`~^@]|"(?:\\.|[^\\"])*"?|;.*|[^\s\[\]{}('"`,;)]*)/;
  const tokens: string[] = [];
  while(true) {
    const matches = input.match(tok_regex);
    if(!matches) {
      break;
    }
    const match = matches[1];
    if(match === "") {
      break;
    }
    if(match[0] !== ";") {
      tokens.push(match);
    }
    input = input.slice(matches[0].length);
  }
  return tokens;
}

const read_form = (reader: Reader) => {
  const token = reader.peek();
  switch(token) {
    case '(':
      return read_list(reader, ')');
    case '[':
      return read_list(reader, ']');
    case '{':
      return read_list(reader, '}');
    case ')':
      throw new Error("unexpected ')'");
    case ']':
      throw new Error("unexpected ']'");
    case '}':
      throw new Error("unexpected '}'");
    default:
      return read_atom(reader);
  }
}
const read_list = (reader: Reader, close: string) => {
  const token = reader.next();

  const ast = [];
  while(reader.peek() !== close) {
    if(reader.peek() === undefined) {
      throw new Error("unbalanced");
    }
    ast.push(read_form(reader));
  }
  reader.next();
  return ast;
}

const read_atom = (reader: Reader) => {
  const token = reader.next();
  if(token.match(/^-?[0-9]+$/)) {
    return parseInt(token);
  } else {
    return token;
  }
}
