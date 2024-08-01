
import { CharStream, CommonTokenStream }  from 'antlr4';
import tispLexer from "./parser/tispLexer.ts";
import tispParser from "./parser/tispParser.ts";
import tispVisitor from "./parser/tispVisitor.ts";


export const parse = (input: string) => {
    const chars = new CharStream(input); // replace this with a FileStream as required
    const lexer = new tispLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new tispParser(tokens);
    const tree = parser.tisp();
    console.log(tree)
}

class CustomVisitor extends tispVisitor<any> {

}