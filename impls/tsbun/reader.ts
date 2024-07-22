import antlr4, {type Lexer, tree} from "antlr4";
import tispLexer from "./parser/tispLexer.ts";
import tispParser, {
  ArrayContext,
  IdContext,
  LabelContext,
  ListContext,
  MapContext,
  NumberContext,
  OpContext,
  SexpAtomContext,
  SexpListContext, StringContext,
  TispContext
} from "./parser/tispParser.ts";
import tispVisitor from "./parser/tispVisitor.ts";
import {VectorType,  IdentType, ListType, NumberType, type TispType, TispProgramType, StringType, AtomType} from "./types.ts";
import {last} from "lodash/fp";


export const read_str_antlr = (input: string) => {
  const chars = antlr4.CharStreams.fromString(input);
  const lexer: Lexer = new tispLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer)
  const parser = new tispParser(tokens);
  const tree = parser.tisp();
  const ast = new AstVisitor();
  const node = ast.visit(tree);
  return node;
}

export class AstVisitor extends tispVisitor<TispType> {
  [x: string]: any;

  visitTisp = (ctx: TispContext): TispType => {
    return new TispProgramType(ctx.s_expr_list().map(exp => this.visit(exp)));
  }

  visitList = (ctx: ListContext): ListType => {
    return new ListType(ctx.s_expr_list().map(child => {
      return this.visit(child)
    }))
  }
  visitArray = (ctx: ArrayContext): VectorType => {
    return new VectorType(ctx.s_expr_list().map(child => {
      return this.visit(child)
    }))
  }
  visitMap = (ctx: MapContext): TispType => {
    //return new MapType(ctx.s_expr_list().map(child => this.visit(child)))
    throw new Error("Not implemented")
  }
  visitSexpAtom = (ctx: SexpAtomContext): TispType => {
    
    return this.visit(ctx.atom());

  }
  visitSexpList = (ctx: SexpListContext): TispType => {
    const list = ctx.list() || ctx.array() || ctx.map();
    return this.visit(list);
  }
  visitId = (ctx: IdContext): IdentType => {
    return new IdentType(ctx.getText());
  }
  visitString = (ctx: StringContext): TispType => {
    return new StringType(ctx.getText().slice(1, -1));
    
  }
  visitNumber = (ctx: NumberContext): NumberType => {
    const numStr = ctx.getText();
    if (numStr.includes(".")) {
      return new NumberType(parseFloat(numStr));
    } else {
      return new NumberType(parseInt(numStr));
    }
  }
  visitOp = (ctx: OpContext): IdentType => {
    return new IdentType(ctx.getText());
  }
  visitLabel = (ctx: LabelContext): TispType => {
    return new AtomType(ctx.getText());
  }

}