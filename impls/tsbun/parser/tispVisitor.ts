// Generated from /home/tim/dev/mal/impls/tsbun/tisp.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { TispContext } from "./tispParser";
import { S_exprContext } from "./tispParser";
import { ListContext } from "./tispParser";
import { ArrayContext } from "./tispParser";
import { MapContext } from "./tispParser";
import { IdContext } from "./tispParser";
import { NumberContext } from "./tispParser";
import { StringContext } from "./tispParser";
import { OpContext } from "./tispParser";
import { AtomKeyContext } from "./tispParser";
import { KeyContext } from "./tispParser";


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
	 * Visit a parse tree produced by the `id`
	 * labeled alternative in `tispParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;
	/**
	 * Visit a parse tree produced by the `number`
	 * labeled alternative in `tispParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;
	/**
	 * Visit a parse tree produced by the `string`
	 * labeled alternative in `tispParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;
	/**
	 * Visit a parse tree produced by the `op`
	 * labeled alternative in `tispParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOp?: (ctx: OpContext) => Result;
	/**
	 * Visit a parse tree produced by the `atomKey`
	 * labeled alternative in `tispParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomKey?: (ctx: AtomKeyContext) => Result;
	/**
	 * Visit a parse tree produced by `tispParser.key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey?: (ctx: KeyContext) => Result;
}

