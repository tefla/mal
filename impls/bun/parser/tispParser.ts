// Generated from /Users/tim/dev/playground/mal/impls/bun/tisp.g4 by ANTLR 4.13.1
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
	public static readonly SQAT = 3;
	public static readonly NUMBER = 4;
	public static readonly STRING = 5;
	public static readonly WS = 6;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_tisp = 0;
	public static readonly RULE_sexpr = 1;
	public static readonly RULE_list = 2;
	public static readonly RULE_atom = 3;
	public static readonly literalNames: (string | null)[] = [ null, "'('", 
                                                            "')'", "'~@'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, "SQAT", 
                                                             "NUMBER", "STRING", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"tisp", "sexpr", "list", "atom",
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
			this.state = 9;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 8;
				this.sexpr();
				}
				}
				this.state = 11;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 58) !== 0));
			this.state = 13;
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
	public sexpr(): SexprContext {
		let localctx: SexprContext = new SexprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, tispParser.RULE_sexpr);
		try {
			this.state = 17;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
			case 4:
			case 5:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 15;
				this.atom();
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 16;
				this.list();
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
			this.state = 19;
			this.match(tispParser.T__0);
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 58) !== 0)) {
				{
				{
				this.state = 20;
				this.sexpr();
				}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 26;
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
	public atom(): AtomContext {
		let localctx: AtomContext = new AtomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, tispParser.RULE_atom);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 28;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 56) !== 0))) {
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

	public static readonly _serializedATN: number[] = [4,1,6,31,2,0,7,0,2,1,
	7,1,2,2,7,2,2,3,7,3,1,0,4,0,10,8,0,11,0,12,0,11,1,0,1,0,1,1,1,1,3,1,18,
	8,1,1,2,1,2,5,2,22,8,2,10,2,12,2,25,9,2,1,2,1,2,1,3,1,3,1,3,0,0,4,0,2,4,
	6,0,1,1,0,3,5,29,0,9,1,0,0,0,2,17,1,0,0,0,4,19,1,0,0,0,6,28,1,0,0,0,8,10,
	3,2,1,0,9,8,1,0,0,0,10,11,1,0,0,0,11,9,1,0,0,0,11,12,1,0,0,0,12,13,1,0,
	0,0,13,14,5,0,0,1,14,1,1,0,0,0,15,18,3,6,3,0,16,18,3,4,2,0,17,15,1,0,0,
	0,17,16,1,0,0,0,18,3,1,0,0,0,19,23,5,1,0,0,20,22,3,2,1,0,21,20,1,0,0,0,
	22,25,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,26,1,0,0,0,25,23,1,0,0,0,26,
	27,5,2,0,0,27,5,1,0,0,0,28,29,7,0,0,0,29,7,1,0,0,0,3,11,17,23];

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
	public sexpr_list(): SexprContext[] {
		return this.getTypedRuleContexts(SexprContext) as SexprContext[];
	}
	public sexpr(i: number): SexprContext {
		return this.getTypedRuleContext(SexprContext, i) as SexprContext;
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


export class SexprContext extends ParserRuleContext {
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
    public get ruleIndex(): number {
    	return tispParser.RULE_sexpr;
	}
	public enterRule(listener: tispListener): void {
	    if(listener.enterSexpr) {
	 		listener.enterSexpr(this);
		}
	}
	public exitRule(listener: tispListener): void {
	    if(listener.exitSexpr) {
	 		listener.exitSexpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tispVisitor<Result>): Result {
		if (visitor.visitSexpr) {
			return visitor.visitSexpr(this);
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
	public sexpr_list(): SexprContext[] {
		return this.getTypedRuleContexts(SexprContext) as SexprContext[];
	}
	public sexpr(i: number): SexprContext {
		return this.getTypedRuleContext(SexprContext, i) as SexprContext;
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
	public SQAT(): TerminalNode {
		return this.getToken(tispParser.SQAT, 0);
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
