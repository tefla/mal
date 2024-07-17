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
	public static readonly EOF = Token.EOF;
	public static readonly RULE_tisp = 0;
	public static readonly RULE_s_expr = 1;
	public static readonly literalNames: (string | null)[] = [ null, "'a'", 
                                                            "'b'" ];
	public static readonly symbolicNames: (string | null)[] = [  ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"tisp", "s_expr",
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
			this.state = 5;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 4;
				this.s_expr();
				}
				}
				this.state = 7;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===1 || _la===2);
			this.state = 9;
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
			this.state = 13;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				localctx = new AtomExprContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 11;
				this.match(tispParser.T__0);
				}
				break;
			case 2:
				localctx = new ListExprContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 12;
				this.match(tispParser.T__1);
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

	public static readonly _serializedATN: number[] = [4,1,2,16,2,0,7,0,2,1,
	7,1,1,0,4,0,6,8,0,11,0,12,0,7,1,0,1,0,1,1,1,1,3,1,14,8,1,1,1,0,0,2,0,2,
	0,0,15,0,5,1,0,0,0,2,13,1,0,0,0,4,6,3,2,1,0,5,4,1,0,0,0,6,7,1,0,0,0,7,5,
	1,0,0,0,7,8,1,0,0,0,8,9,1,0,0,0,9,10,5,0,0,1,10,1,1,0,0,0,11,14,5,1,0,0,
	12,14,5,2,0,0,13,11,1,0,0,0,13,12,1,0,0,0,14,3,1,0,0,0,2,7,13];

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
export class AtomExprContext extends S_exprContext {
	constructor(parser: tispParser, ctx: S_exprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: tispListener): void {
	    if(listener.enterAtomExpr) {
	 		listener.enterAtomExpr(this);
		}
	}
	public exitRule(listener: tispListener): void {
	    if(listener.exitAtomExpr) {
	 		listener.exitAtomExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tispVisitor<Result>): Result {
		if (visitor.visitAtomExpr) {
			return visitor.visitAtomExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListExprContext extends S_exprContext {
	constructor(parser: tispParser, ctx: S_exprContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: tispListener): void {
	    if(listener.enterListExpr) {
	 		listener.enterListExpr(this);
		}
	}
	public exitRule(listener: tispListener): void {
	    if(listener.exitListExpr) {
	 		listener.exitListExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tispVisitor<Result>): Result {
		if (visitor.visitListExpr) {
			return visitor.visitListExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
