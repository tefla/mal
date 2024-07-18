// Generated from /home/tim/dev/mal/impls/tsbun/tisp.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `tispParser`.
 */
export default class tispListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `tispParser.tisp`.
	 * @param ctx the parse tree
	 */
	enterTisp?: (ctx: TispContext) => void;
	/**
	 * Exit a parse tree produced by `tispParser.tisp`.
	 * @param ctx the parse tree
	 */
	exitTisp?: (ctx: TispContext) => void;
	/**
	 * Enter a parse tree produced by `tispParser.s_expr`.
	 * @param ctx the parse tree
	 */
	enterS_expr?: (ctx: S_exprContext) => void;
	/**
	 * Exit a parse tree produced by `tispParser.s_expr`.
	 * @param ctx the parse tree
	 */
	exitS_expr?: (ctx: S_exprContext) => void;
	/**
	 * Enter a parse tree produced by `tispParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `tispParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;
	/**
	 * Enter a parse tree produced by `tispParser.array`.
	 * @param ctx the parse tree
	 */
	enterArray?: (ctx: ArrayContext) => void;
	/**
	 * Exit a parse tree produced by `tispParser.array`.
	 * @param ctx the parse tree
	 */
	exitArray?: (ctx: ArrayContext) => void;
	/**
	 * Enter a parse tree produced by `tispParser.map`.
	 * @param ctx the parse tree
	 */
	enterMap?: (ctx: MapContext) => void;
	/**
	 * Exit a parse tree produced by `tispParser.map`.
	 * @param ctx the parse tree
	 */
	exitMap?: (ctx: MapContext) => void;
	/**
	 * Enter a parse tree produced by the `id`
	 * labeled alternative in `tispParser.atom`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by the `id`
	 * labeled alternative in `tispParser.atom`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;
	/**
	 * Enter a parse tree produced by the `number`
	 * labeled alternative in `tispParser.atom`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by the `number`
	 * labeled alternative in `tispParser.atom`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;
	/**
	 * Enter a parse tree produced by the `string`
	 * labeled alternative in `tispParser.atom`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by the `string`
	 * labeled alternative in `tispParser.atom`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;
	/**
	 * Enter a parse tree produced by the `op`
	 * labeled alternative in `tispParser.atom`.
	 * @param ctx the parse tree
	 */
	enterOp?: (ctx: OpContext) => void;
	/**
	 * Exit a parse tree produced by the `op`
	 * labeled alternative in `tispParser.atom`.
	 * @param ctx the parse tree
	 */
	exitOp?: (ctx: OpContext) => void;
	/**
	 * Enter a parse tree produced by the `atomKey`
	 * labeled alternative in `tispParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtomKey?: (ctx: AtomKeyContext) => void;
	/**
	 * Exit a parse tree produced by the `atomKey`
	 * labeled alternative in `tispParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtomKey?: (ctx: AtomKeyContext) => void;
	/**
	 * Enter a parse tree produced by `tispParser.key`.
	 * @param ctx the parse tree
	 */
	enterKey?: (ctx: KeyContext) => void;
	/**
	 * Exit a parse tree produced by `tispParser.key`.
	 * @param ctx the parse tree
	 */
	exitKey?: (ctx: KeyContext) => void;
}

