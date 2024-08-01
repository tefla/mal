// Generated from /Users/tim/dev/playground/mal/impls/bun/tisp.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import tispListener from './tispListener.js';
import tispVisitor from './tispVisitor.js';

const serializedATN = [4,1,6,31,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,4,0,
10,8,0,11,0,12,0,11,1,0,1,0,1,1,1,1,3,1,18,8,1,1,2,1,2,5,2,22,8,2,10,2,12,
2,25,9,2,1,2,1,2,1,3,1,3,1,3,0,0,4,0,2,4,6,0,1,1,0,3,5,29,0,9,1,0,0,0,2,
17,1,0,0,0,4,19,1,0,0,0,6,28,1,0,0,0,8,10,3,2,1,0,9,8,1,0,0,0,10,11,1,0,
0,0,11,9,1,0,0,0,11,12,1,0,0,0,12,13,1,0,0,0,13,14,5,0,0,1,14,1,1,0,0,0,
15,18,3,6,3,0,16,18,3,4,2,0,17,15,1,0,0,0,17,16,1,0,0,0,18,3,1,0,0,0,19,
23,5,1,0,0,20,22,3,2,1,0,21,20,1,0,0,0,22,25,1,0,0,0,23,21,1,0,0,0,23,24,
1,0,0,0,24,26,1,0,0,0,25,23,1,0,0,0,26,27,5,2,0,0,27,5,1,0,0,0,28,29,7,0,
0,0,29,7,1,0,0,0,3,11,17,23];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class tispParser extends antlr4.Parser {

    static grammarFileName = "tisp.g4";
    static literalNames = [ null, "'('", "')'", "'~@'" ];
    static symbolicNames = [ null, null, null, "SQAT", "NUMBER", "STRING", 
                             "WS" ];
    static ruleNames = [ "tisp", "sexpr", "list", "atom" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = tispParser.ruleNames;
        this.literalNames = tispParser.literalNames;
        this.symbolicNames = tispParser.symbolicNames;
    }



	tisp() {
	    let localctx = new TispContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, tispParser.RULE_tisp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 9; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 8;
	            this.sexpr();
	            this.state = 11; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 58) !== 0));
	        this.state = 13;
	        this.match(tispParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sexpr() {
	    let localctx = new SexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, tispParser.RULE_sexpr);
	    try {
	        this.state = 17;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 4:
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 15;
	            this.atom();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 16;
	            this.list();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, tispParser.RULE_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.match(tispParser.T__0);
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 58) !== 0)) {
	            this.state = 20;
	            this.sexpr();
	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 26;
	        this.match(tispParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, tispParser.RULE_atom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 56) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

tispParser.EOF = antlr4.Token.EOF;
tispParser.T__0 = 1;
tispParser.T__1 = 2;
tispParser.SQAT = 3;
tispParser.NUMBER = 4;
tispParser.STRING = 5;
tispParser.WS = 6;

tispParser.RULE_tisp = 0;
tispParser.RULE_sexpr = 1;
tispParser.RULE_list = 2;
tispParser.RULE_atom = 3;

class TispContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tispParser.RULE_tisp;
    }

	EOF() {
	    return this.getToken(tispParser.EOF, 0);
	};

	sexpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SexprContext);
	    } else {
	        return this.getTypedRuleContext(SexprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tispListener ) {
	        listener.enterTisp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tispListener ) {
	        listener.exitTisp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tispVisitor ) {
	        return visitor.visitTisp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tispParser.RULE_sexpr;
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tispListener ) {
	        listener.enterSexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tispListener ) {
	        listener.exitSexpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tispVisitor ) {
	        return visitor.visitSexpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tispParser.RULE_list;
    }

	sexpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SexprContext);
	    } else {
	        return this.getTypedRuleContext(SexprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tispListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tispListener ) {
	        listener.exitList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tispVisitor ) {
	        return visitor.visitList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tispParser.RULE_atom;
    }

	NUMBER() {
	    return this.getToken(tispParser.NUMBER, 0);
	};

	STRING() {
	    return this.getToken(tispParser.STRING, 0);
	};

	SQAT() {
	    return this.getToken(tispParser.SQAT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tispListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tispListener ) {
	        listener.exitAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof tispVisitor ) {
	        return visitor.visitAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




tispParser.TispContext = TispContext; 
tispParser.SexprContext = SexprContext; 
tispParser.ListContext = ListContext; 
tispParser.AtomContext = AtomContext; 
