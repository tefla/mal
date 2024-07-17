// Generated from /home/tim/dev/mal/impls/tsbun/tisp.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { TispContext } from "./tispParser";
import { AtomExprContext } from "./tispParser";
import { ListExprContext } from "./tispParser";
import { ListContext } from "./tispParser";
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
	 * Enter a parse tree produced by the `atomExpr`
	 * labeled alternative in `tispParser.s_expr`.
	 * @param ctx the parse tree
	 */
	enterAtomExpr?: (ctx: AtomExprContext) => void;
	/**
	 * Exit a parse tree produced by the `atomExpr`
	 * labeled alternative in `tispParser.s_expr`.
	 * @param ctx the parse tree
	 */
	exitAtomExpr?: (ctx: AtomExprContext) => void;
	/**
	 * Enter a parse tree produced by the `listExpr`
	 * labeled alternative in `tispParser.s_expr`.
	 * @param ctx the parse tree
	 */
	enterListExpr?: (ctx: ListExprContext) => void;
	/**
	 * Exit a parse tree produced by the `listExpr`
	 * labeled alternative in `tispParser.s_expr`.
	 * @param ctx the parse tree
	 */
	exitListExpr?: (ctx: ListExprContext) => void;
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

