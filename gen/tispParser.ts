// Generated from /Users/tim/dev/playground/mal/impls/tsbun/tisp.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import tispListener from "./tispListener.js";
import tispVisitor from "./tispVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class tispParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly ID = 8;
	public static readonly NUMBER = 9;
	public static readonly STRING = 10;
	public static readonly OP = 11;
	public static readonly WS = 12;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_tisp = 0;
	public static readonly RULE_s_expr = 1;
	public static readonly RULE_list = 2;
	public static readonly RULE_array = 3;
	public static readonly RULE_map = 4;
	public static readonly RULE_atom = 5;
	public static readonly RULE_key = 6;
	public static readonly literalNames: (string | null)[] = [ null, "'('", 
                                                            "')'", "'['", 
                                                            "']'", "'{'", 
                                                            "'}'", "':'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "ID", "NUMBER", 
                                                             "STRING", "OP", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"tisp", "s_expr", "list", "array", "map", "atom", "key",
	];
	public get grammarFileName(): string { return "tisp.g4"; }
	public get literalNames(): (string | null)[] { return tispParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return tispParser.symbolicNames; }
	public get ruleNames(): string[] { return tispParser.ruleNames; }
	public get serializedATN(): number[] { return tispParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, tispParser._ATN, tispParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public tisp(): TispContext {
		let localctx: TispContext = new TispContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, tispParser.RULE_tisp);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 15;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 14;
				this.s_expr();
				}
				}
				this.state = 17;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4010) !== 0));
			this.state = 19;
			this.match(tispParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public s_expr(): S_exprContext {
		let localctx: S_exprContext = new S_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, tispParser.RULE_s_expr);
		try {
			this.state = 27;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 3:
			case 5:
				localctx = new SexprListContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 24;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 1:
					{
					this.state = 21;
					this.list();
					}
					break;
				case 3:
					{
					this.state = 22;
					this.array();
					}
					break;
				case 5:
					{
					this.state = 23;
					this.map();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
				localctx = new SexprAtomContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 26;
				this.atom();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public list(): ListContext {
		let localctx: ListContext = new ListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, tispParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 29;
			this.match(tispParser.T__0);
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4010) !== 0)) {
				{
				{
				this.state = 30;
				this.s_expr();
				}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 36;
			this.match(tispParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public array(): ArrayContext {
		let localctx: ArrayContext = new ArrayContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, tispParser.RULE_array);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 38;
			this.match(tispParser.T__2);
			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4010) !== 0)) {
				{
				{
				this.state = 39;
				this.s_expr();
				}
				}
				this.state = 44;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 45;
			this.match(tispParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public map(): MapContext {
		let localctx: MapContext = new MapContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, tispParser.RULE_map);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 47;
			this.match(tispParser.T__4);
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4010) !== 0)) {
				{
				{
				this.state = 48;
				this.s_expr();
				}
				}
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 54;
			this.match(tispParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let localctx: AtomContext = new AtomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, tispParser.RULE_atom);
		try {
			this.state = 61;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 8:
				localctx = new IdContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 56;
				this.match(tispParser.ID);
				}
				break;
			case 9:
				localctx = new NumberContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 57;
				this.match(tispParser.NUMBER);
				}
				break;
			case 10:
				localctx = new StringContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 58;
				this.match(tispParser.STRING);
				}
				break;
			case 11:
				localctx = new OpContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 59;
				this.match(tispParser.OP);
				}
				break;
			case 7:
				localctx = new AtomKeyContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 60;
				this.key();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public key(): KeyContext {
		let localctx: KeyContext = new KeyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, tispParser.RULE_key);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 63;
			this.match(tispParser.T__6);
			this.state = 64;
			this.match(tispParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,12,67,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,1,0,4,0,16,8,0,11,0,12,0,
	17,1,0,1,0,1,1,1,1,1,1,3,1,25,8,1,1,1,3,1,28,8,1,1,2,1,2,5,2,32,8,2,10,
	2,12,2,35,9,2,1,2,1,2,1,3,1,3,5,3,41,8,3,10,3,12,3,44,9,3,1,3,1,3,1,4,1,
	4,5,4,50,8,4,10,4,12,4,53,9,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,3,5,62,8,5,1,
	6,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,0,70,0,15,1,0,0,0,2,27,1,0,0,0,4,
	29,1,0,0,0,6,38,1,0,0,0,8,47,1,0,0,0,10,61,1,0,0,0,12,63,1,0,0,0,14,16,
	3,2,1,0,15,14,1,0,0,0,16,17,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,19,1,
	0,0,0,19,20,5,0,0,1,20,1,1,0,0,0,21,25,3,4,2,0,22,25,3,6,3,0,23,25,3,8,
	4,0,24,21,1,0,0,0,24,22,1,0,0,0,24,23,1,0,0,0,25,28,1,0,0,0,26,28,3,10,
	5,0,27,24,1,0,0,0,27,26,1,0,0,0,28,3,1,0,0,0,29,33,5,1,0,0,30,32,3,2,1,
	0,31,30,1,0,0,0,32,35,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,36,1,0,0,0,
	35,33,1,0,0,0,36,37,5,2,0,0,37,5,1,0,0,0,38,42,5,3,0,0,39,41,3,2,1,0,40,
	39,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,45,1,0,0,0,44,42,
	1,0,0,0,45,46,5,4,0,0,46,7,1,0,0,0,47,51,5,5,0,0,48,50,3,2,1,0,49,48,1,
	0,0,0,50,53,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,54,1,0,0,0,53,51,1,0,
	0,0,54,55,5,6,0,0,55,9,1,0,0,0,56,62,5,8,0,0,57,62,5,9,0,0,58,62,5,10,0,
	0,59,62,5,11,0,0,60,62,3,12,6,0,61,56,1,0,0,0,61,57,1,0,0,0,61,58,1,0,0,
	0,61,59,1,0,0,0,61,60,1,0,0,0,62,11,1,0,0,0,63,64,5,7,0,0,64,65,5,8,0,0,
	65,13,1,0,0,0,7,17,24,27,33,42,51,61];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!tispParser.__ATN) {
			tispParser.__ATN = new ATNDeserializer().deserialize(tispParser._serializedATN);
		}

		return tispParser.__ATN;
	}


	static DecisionsToDFA = tispParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class TispContext extends ParserRuleContext {
	constructor(parser?: tispParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(tispParser.EOF, 0);
	}
	public s_expr_list(): S_exprContext[] {
		return this.getTypedRuleContexts(S_exprContext) as S_exprContext[];
	}
	public s_expr(i: number): S_exprContext {
		return this.getTypedRuleContext(S_exprContext, i) as S_exprContext;
	}
    public get ruleIndex(): number {
    	return tispParser.RULE_tisp;
	}
	public enterRule(listener: tispListener): void {
	    if(listener.enterTisp) {
	 		listener.enterTisp(this);
		}
	}
	public exitRule(listener: tispListener): void {
	    if(listener.exitTisp) {
	 		listener.exitTisp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tispVisitor<Result>): Result {
		if (visitor.visitTisp) {
			return visitor.visitTisp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class S_exprContext extends ParserRuleContext {
	constructor(parser?: tispParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return tispParser.RULE_s_expr;
	}
	public copyFrom(ctx: S_exprContext): void {
		super.copyFrom(ctx);
	}
}
export class SexprAtomContext extends S_exprContext {
	constructor(parser: tispParser, ctx: S_exprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public atom(): AtomContext {
		return this.getTypedRuleContext(AtomContext, 0) as AtomContext;
	}
	public enterRule(listener: tispListener): void {
	    if(listener.enterSexprAtom) {
	 		listener.enterSexprAtom(this);
		}
	}
	public exitRule(listener: tispListener): void {
	    if(listener.exitSexprAtom) {
	 		listener.exitSexprAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tispVisitor<Result>): Result {
		if (visitor.visitSexprAtom) {
			return visitor.visitSexprAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SexprListContext extends S_exprContext {
	constructor(parser: tispParser, ctx: S_exprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public list(): ListContext {
		return this.getTypedRuleContext(ListContext, 0) as ListContext;
	}
	public array(): ArrayContext {
		return this.getTypedRuleContext(ArrayContext, 0) as ArrayContext;
	}
	public map(): MapContext {
		return this.getTypedRuleContext(MapContext, 0) as MapContext;
	}
	public enterRule(listener: tispListener): void {
	    if(listener.enterSexprList) {
	 		listener.enterSexprList(this);
		}
	}
	public exitRule(listener: tispListener): void {
	    if(listener.exitSexprList) {
	 		listener.exitSexprList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tispVisitor<Result>): Result {
		if (visitor.visitSexprList) {
			return visitor.visitSexprList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	constructor(parser?: tispParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public s_expr_list(): S_exprContext[] {
		return this.getTypedRuleContexts(S_exprContext) as S_exprContext[];
	}
	public s_expr(i: number): S_exprContext {
		return this.getTypedRuleContext(S_exprContext, i) as S_exprContext;
	}
    public get ruleIndex(): number {
    	return tispParser.RULE_list;
	}
	public enterRule(listener: tispListener): void {
	    if(listener.enterList) {
	 		listener.enterList(this);
		}
	}
	public exitRule(listener: tispListener): void {
	    if(listener.exitList) {
	 		listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tispVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayContext extends ParserRuleContext {
	constructor(parser?: tispParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public s_expr_list(): S_exprContext[] {
		return this.getTypedRuleContexts(S_exprContext) as S_exprContext[];
	}
	public s_expr(i: number): S_exprContext {
		return this.getTypedRuleContext(S_exprContext, i) as S_exprContext;
	}
    public get ruleIndex(): number {
    	return tispParser.RULE_array;
	}
	public enterRule(listener: tispListener): void {
	    if(listener.enterArray) {
	 		listener.enterArray(this);
		}
	}
	public exitRule(listener: tispListener): void {
	    if(listener.exitArray) {
	 		listener.exitArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tispVisitor<Result>): Result {
		if (visitor.visitArray) {
			return visitor.visitArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapContext extends ParserRuleContext {
	constructor(parser?: tispParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public s_expr_list(): S_exprContext[] {
		return this.getTypedRuleContexts(S_exprContext) as S_exprContext[];
	}
	public s_expr(i: number): S_exprContext {
		return this.getTypedRuleContext(S_exprContext, i) as S_exprContext;
	}
    public get ruleIndex(): number {
    	return tispParser.RULE_map;
	}
	public enterRule(listener: tispListener): void {
	    if(listener.enterMap) {
	 		listener.enterMap(this);
		}
	}
	public exitRule(listener: tispListener): void {
	    if(listener.exitMap) {
	 		listener.exitMap(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tispVisitor<Result>): Result {
		if (visitor.visitMap) {
			return visitor.visitMap(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	constructor(parser?: tispParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return tispParser.RULE_atom;
	}
	public copyFrom(ctx: AtomContext): void {
		super.copyFrom(ctx);
	}
}
export class NumberContext extends AtomContext {
	constructor(parser: tispParser, ctx: AtomContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(tispParser.NUMBER, 0);
	}
	public enterRule(listener: tispListener): void {
	    if(listener.enterNumber) {
	 		listener.enterNumber(this);
		}
	}
	public exitRule(listener: tispListener): void {
	    if(listener.exitNumber) {
	 		listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tispVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OpContext extends AtomContext {
	constructor(parser: tispParser, ctx: AtomContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OP(): TerminalNode {
		return this.getToken(tispParser.OP, 0);
	}
	public enterRule(listener: tispListener): void {
	    if(listener.enterOp) {
	 		listener.enterOp(this);
		}
	}
	public exitRule(listener: tispListener): void {
	    if(listener.exitOp) {
	 		listener.exitOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tispVisitor<Result>): Result {
		if (visitor.visitOp) {
			return visitor.visitOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AtomKeyContext extends AtomContext {
	constructor(parser: tispParser, ctx: AtomContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public key(): KeyContext {
		return this.getTypedRuleContext(KeyContext, 0) as KeyContext;
	}
	public enterRule(listener: tispListener): void {
	    if(listener.enterAtomKey) {
	 		listener.enterAtomKey(this);
		}
	}
	public exitRule(listener: tispListener): void {
	    if(listener.exitAtomKey) {
	 		listener.exitAtomKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tispVisitor<Result>): Result {
		if (visitor.visitAtomKey) {
			return visitor.visitAtomKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringContext extends AtomContext {
	constructor(parser: tispParser, ctx: AtomContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRING(): TerminalNode {
		return this.getToken(tispParser.STRING, 0);
	}
	public enterRule(listener: tispListener): void {
	    if(listener.enterString) {
	 		listener.enterString(this);
		}
	}
	public exitRule(listener: tispListener): void {
	    if(listener.exitString) {
	 		listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tispVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdContext extends AtomContext {
	constructor(parser: tispParser, ctx: AtomContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(tispParser.ID, 0);
	}
	public enterRule(listener: tispListener): void {
	    if(listener.enterId) {
	 		listener.enterId(this);
		}
	}
	public exitRule(listener: tispListener): void {
	    if(listener.exitId) {
	 		listener.exitId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tispVisitor<Result>): Result {
		if (visitor.visitId) {
			return visitor.visitId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyContext extends ParserRuleContext {
	constructor(parser?: tispParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(tispParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return tispParser.RULE_key;
	}
	public enterRule(listener: tispListener): void {
	    if(listener.enterKey) {
	 		listener.enterKey(this);
		}
	}
	public exitRule(listener: tispListener): void {
	    if(listener.exitKey) {
	 		listener.exitKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tispVisitor<Result>): Result {
		if (visitor.visitKey) {
			return visitor.visitKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
