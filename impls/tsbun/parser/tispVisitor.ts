// Generated from /home/tim/dev/mal/impls/tsbun/tisp.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { TispContext } from "./tispParser";
import { AtomExprContext } from "./tispParser";
import { ListExprContext } from "./tispParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `tispParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class tispVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `tispParser.tisp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTisp?: (ctx: TispContext) => Result;
	/**
	 * Visit a parse tree produced by the `atomExpr`
	 * labeled alternative in `tispParser.s_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomExpr?: (ctx: AtomExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `listExpr`
	 * labeled alternative in `tispParser.s_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListExpr?: (ctx: ListExprContext) => Result;
}

