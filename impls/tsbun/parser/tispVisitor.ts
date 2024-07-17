// Generated from /home/tim/dev/mal/impls/tsbun/tisp.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { TispContext } from "./tispParser";
import { S_exprContext } from "./tispParser";
import { ListContext } from "./tispParser";
import { ArrayContext } from "./tispParser";
import { MapContext } from "./tispParser";
import { AtomContext } from "./tispParser";


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
	 * Visit a parse tree produced by `tispParser.s_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitS_expr?: (ctx: S_exprContext) => Result;
	/**
	 * Visit a parse tree produced by `tispParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;
	/**
	 * Visit a parse tree produced by `tispParser.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray?: (ctx: ArrayContext) => Result;
	/**
	 * Visit a parse tree produced by `tispParser.map`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMap?: (ctx: MapContext) => Result;
	/**
	 * Visit a parse tree produced by `tispParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;
}

