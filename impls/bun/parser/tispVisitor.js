// Generated from /Users/tim/dev/playground/mal/impls/bun/tisp.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by tispParser.

export default class tispVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by tispParser#tisp.
	visitTisp(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by tispParser#sexpr.
	visitSexpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by tispParser#list.
	visitList(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by tispParser#atom.
	visitAtom(ctx) {
	  return this.visitChildren(ctx);
	}



}