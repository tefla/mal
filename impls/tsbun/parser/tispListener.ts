// Generated from /home/tim/dev/mal/impls/tsbun/tisp.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { TispContext } from "./tispParser";
import { S_exprContext } from "./tispParser";
import { ListContext } from "./tispParser";
import { ArrayContext } from "./tispParser";
import { MapContext } from "./tispParser";
import { AtomContext } from "./tispParser";


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
	 * Enter a parse tree produced by `tispParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `tispParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;
}

