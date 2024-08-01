// Generated from /Users/tim/dev/playground/mal/impls/bun/tisp.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,6,50,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,3,5,3,22,8,3,10,3,12,3,25,9,3,
1,3,3,3,28,8,3,1,3,4,3,31,8,3,11,3,12,3,32,1,4,1,4,5,4,37,8,4,10,4,12,4,
40,9,4,1,4,1,4,1,5,4,5,45,8,5,11,5,12,5,46,1,5,1,5,0,0,6,1,1,3,2,5,3,7,4,
9,5,11,6,1,0,3,1,0,48,57,1,0,34,34,3,0,9,10,13,13,32,32,54,0,1,1,0,0,0,0,
3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,1,13,1,0,0,0,
3,15,1,0,0,0,5,17,1,0,0,0,7,27,1,0,0,0,9,34,1,0,0,0,11,44,1,0,0,0,13,14,
5,40,0,0,14,2,1,0,0,0,15,16,5,41,0,0,16,4,1,0,0,0,17,18,5,126,0,0,18,19,
5,64,0,0,19,6,1,0,0,0,20,22,7,0,0,0,21,20,1,0,0,0,22,25,1,0,0,0,23,21,1,
0,0,0,23,24,1,0,0,0,24,26,1,0,0,0,25,23,1,0,0,0,26,28,5,46,0,0,27,23,1,0,
0,0,27,28,1,0,0,0,28,30,1,0,0,0,29,31,7,0,0,0,30,29,1,0,0,0,31,32,1,0,0,
0,32,30,1,0,0,0,32,33,1,0,0,0,33,8,1,0,0,0,34,38,5,34,0,0,35,37,8,1,0,0,
36,35,1,0,0,0,37,40,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,41,1,0,0,0,40,
38,1,0,0,0,41,42,5,34,0,0,42,10,1,0,0,0,43,45,7,2,0,0,44,43,1,0,0,0,45,46,
1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,48,1,0,0,0,48,49,6,5,0,0,49,12,1,
0,0,0,6,0,23,27,32,38,46,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class tispLexer extends antlr4.Lexer {

    static grammarFileName = "tisp.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'('", "')'", "'~@'" ];
	static symbolicNames = [ null, null, null, "SQAT", "NUMBER", "STRING", 
                          "WS" ];
	static ruleNames = [ "T__0", "T__1", "SQAT", "NUMBER", "STRING", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

tispLexer.EOF = antlr4.Token.EOF;
tispLexer.T__0 = 1;
tispLexer.T__1 = 2;
tispLexer.SQAT = 3;
tispLexer.NUMBER = 4;
tispLexer.STRING = 5;
tispLexer.WS = 6;



