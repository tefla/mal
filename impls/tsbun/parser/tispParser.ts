// Generated from /home/tim/dev/mal/impls/tsbun/tisp.g4 by ANTLR 4.13.1
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
	public static readonly OPS = 7;
	public static readonly NUMBER = 8;
	public static readonly STRING = 9;
	public static readonly ID = 10;
	public static readonly WS = 11;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_tisp = 0;
	public static readonly RULE_s_expr = 1;
	public static readonly RULE_list = 2;
	public static readonly RULE_array = 3;
	public static readonly RULE_map = 4;
	public static readonly RULE_atom = 5;
	public static readonly literalNames: (string | null)[] = [ null, "'('", 
                                                            "')'", "'['", 
                                                            "']'", "'{'", 
                                                            "'}'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "OPS", 
                                                             "NUMBER", "STRING", 
                                                             "ID", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"tisp", "s_expr", "list", "array", "map", "atom",
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
			this.state = 13;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 12;
				this.s_expr();
				}
				}
				this.state = 15;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1962) !== 0));
			this.state = 17;
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
			this.state = 23;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
			case 8:
			case 9:
			case 10:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 19;
				this.atom();
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 20;
				this.list();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 21;
				this.array();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 22;
				this.map();
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
			this.state = 25;
			this.match(tispParser.T__0);
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1962) !== 0)) {
				{
				{
				this.state = 26;
				this.s_expr();
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 32;
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
			this.state = 34;
			this.match(tispParser.T__2);
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1962) !== 0)) {
				{
				{
				this.state = 35;
				this.s_expr();
				}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 41;
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
			this.state = 43;
			this.match(tispParser.T__4);
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1962) !== 0)) {
				{
				{
				this.state = 44;
				this.s_expr();
				}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 50;
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
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 52;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1920) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
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

	public static readonly _serializedATN: number[] = [4,1,11,55,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,1,0,4,0,14,8,0,11,0,12,0,15,1,0,1,
	0,1,1,1,1,1,1,1,1,3,1,24,8,1,1,2,1,2,5,2,28,8,2,10,2,12,2,31,9,2,1,2,1,
	2,1,3,1,3,5,3,37,8,3,10,3,12,3,40,9,3,1,3,1,3,1,4,1,4,5,4,46,8,4,10,4,12,
	4,49,9,4,1,4,1,4,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,1,1,0,7,10,55,0,13,1,
	0,0,0,2,23,1,0,0,0,4,25,1,0,0,0,6,34,1,0,0,0,8,43,1,0,0,0,10,52,1,0,0,0,
	12,14,3,2,1,0,13,12,1,0,0,0,14,15,1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,16,
	17,1,0,0,0,17,18,5,0,0,1,18,1,1,0,0,0,19,24,3,10,5,0,20,24,3,4,2,0,21,24,
	3,6,3,0,22,24,3,8,4,0,23,19,1,0,0,0,23,20,1,0,0,0,23,21,1,0,0,0,23,22,1,
	0,0,0,24,3,1,0,0,0,25,29,5,1,0,0,26,28,3,2,1,0,27,26,1,0,0,0,28,31,1,0,
	0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,32,1,0,0,0,31,29,1,0,0,0,32,33,5,2,0,
	0,33,5,1,0,0,0,34,38,5,3,0,0,35,37,3,2,1,0,36,35,1,0,0,0,37,40,1,0,0,0,
	38,36,1,0,0,0,38,39,1,0,0,0,39,41,1,0,0,0,40,38,1,0,0,0,41,42,5,4,0,0,42,
	7,1,0,0,0,43,47,5,5,0,0,44,46,3,2,1,0,45,44,1,0,0,0,46,49,1,0,0,0,47,45,
	1,0,0,0,47,48,1,0,0,0,48,50,1,0,0,0,49,47,1,0,0,0,50,51,5,6,0,0,51,9,1,
	0,0,0,52,53,7,0,0,0,53,11,1,0,0,0,5,15,23,29,38,47];

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
	public atom(): AtomContext {
		return this.getTypedRuleContext(AtomContext, 0) as AtomContext;
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
    public get ruleIndex(): number {
    	return tispParser.RULE_s_expr;
	}
	public enterRule(listener: tispListener): void {
	    if(listener.enterS_expr) {
	 		listener.enterS_expr(this);
		}
	}
	public exitRule(listener: tispListener): void {
	    if(listener.exitS_expr) {
	 		listener.exitS_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tispVisitor<Result>): Result {
		if (visitor.visitS_expr) {
			return visitor.visitS_expr(this);
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
	public NUMBER(): TerminalNode {
		return this.getToken(tispParser.NUMBER, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(tispParser.STRING, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(tispParser.ID, 0);
	}
	public OPS(): TerminalNode {
		return this.getToken(tispParser.OPS, 0);
	}
    public get ruleIndex(): number {
    	return tispParser.RULE_atom;
	}
	public enterRule(listener: tispListener): void {
	    if(listener.enterAtom) {
	 		listener.enterAtom(this);
		}
	}
	public exitRule(listener: tispListener): void {
	    if(listener.exitAtom) {
	 		listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tispVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
