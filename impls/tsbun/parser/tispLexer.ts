// Generated from /home/tim/dev/mal/impls/tsbun/tisp.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class tispLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "ID", "NUMBER", 
		"STRING", "OP", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, tispLexer._ATN, tispLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "tisp.g4"; }

	public get literalNames(): (string | null)[] { return tispLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return tispLexer.symbolicNames; }
	public get ruleNames(): string[] { return tispLexer.ruleNames; }

	public get serializedATN(): number[] { return tispLexer._serializedATN; }

	public get channelNames(): string[] { return tispLexer.channelNames; }

	public get modeNames(): string[] { return tispLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,12,129,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,
	1,6,1,6,1,7,4,7,41,8,7,11,7,12,7,42,1,7,5,7,46,8,7,10,7,12,7,49,9,7,1,8,
	3,8,52,8,8,1,8,5,8,55,8,8,10,8,12,8,58,9,8,1,8,3,8,61,8,8,1,8,4,8,64,8,
	8,11,8,12,8,65,1,9,1,9,5,9,70,8,9,10,9,12,9,73,9,9,1,9,1,9,1,10,1,10,1,
	10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
	10,1,10,1,10,1,10,3,10,112,8,10,1,11,4,11,115,8,11,11,11,12,11,116,1,11,
	1,11,5,11,121,8,11,10,11,12,11,124,9,11,3,11,126,8,11,1,11,1,11,0,0,12,
	1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,1,0,8,3,0,65,
	90,95,95,97,122,5,0,45,45,48,57,65,90,95,95,97,122,1,0,48,57,1,0,34,34,
	6,0,37,37,42,43,45,45,47,47,61,61,94,94,3,0,38,38,124,124,126,126,4,0,9,
	10,13,13,32,32,44,44,2,0,10,10,13,13,155,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,
	0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,
	17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,1,25,1,0,0,0,3,27,1,0,
	0,0,5,29,1,0,0,0,7,31,1,0,0,0,9,33,1,0,0,0,11,35,1,0,0,0,13,37,1,0,0,0,
	15,40,1,0,0,0,17,51,1,0,0,0,19,67,1,0,0,0,21,111,1,0,0,0,23,125,1,0,0,0,
	25,26,5,40,0,0,26,2,1,0,0,0,27,28,5,41,0,0,28,4,1,0,0,0,29,30,5,91,0,0,
	30,6,1,0,0,0,31,32,5,93,0,0,32,8,1,0,0,0,33,34,5,123,0,0,34,10,1,0,0,0,
	35,36,5,125,0,0,36,12,1,0,0,0,37,38,5,58,0,0,38,14,1,0,0,0,39,41,7,0,0,
	0,40,39,1,0,0,0,41,42,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,47,1,0,0,0,
	44,46,7,1,0,0,45,44,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,
	16,1,0,0,0,49,47,1,0,0,0,50,52,5,45,0,0,51,50,1,0,0,0,51,52,1,0,0,0,52,
	60,1,0,0,0,53,55,7,2,0,0,54,53,1,0,0,0,55,58,1,0,0,0,56,54,1,0,0,0,56,57,
	1,0,0,0,57,59,1,0,0,0,58,56,1,0,0,0,59,61,5,46,0,0,60,56,1,0,0,0,60,61,
	1,0,0,0,61,63,1,0,0,0,62,64,7,2,0,0,63,62,1,0,0,0,64,65,1,0,0,0,65,63,1,
	0,0,0,65,66,1,0,0,0,66,18,1,0,0,0,67,71,5,34,0,0,68,70,8,3,0,0,69,68,1,
	0,0,0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,74,1,0,0,0,73,71,1,0,
	0,0,74,75,5,34,0,0,75,20,1,0,0,0,76,112,7,4,0,0,77,78,5,33,0,0,78,112,5,
	61,0,0,79,112,5,60,0,0,80,81,5,60,0,0,81,112,5,61,0,0,82,112,5,62,0,0,83,
	84,5,62,0,0,84,112,5,61,0,0,85,86,5,38,0,0,86,112,5,38,0,0,87,88,5,124,
	0,0,88,112,5,124,0,0,89,112,5,33,0,0,90,91,5,45,0,0,91,112,5,62,0,0,92,
	93,5,45,0,0,93,94,5,45,0,0,94,95,5,62,0,0,95,112,5,62,0,0,96,97,5,43,0,
	0,97,112,5,43,0,0,98,99,5,45,0,0,99,112,5,45,0,0,100,101,5,60,0,0,101,112,
	5,60,0,0,102,103,5,62,0,0,103,112,5,62,0,0,104,105,5,62,0,0,105,106,5,62,
	0,0,106,112,5,62,0,0,107,108,5,60,0,0,108,109,5,60,0,0,109,112,5,60,0,0,
	110,112,7,5,0,0,111,76,1,0,0,0,111,77,1,0,0,0,111,79,1,0,0,0,111,80,1,0,
	0,0,111,82,1,0,0,0,111,83,1,0,0,0,111,85,1,0,0,0,111,87,1,0,0,0,111,89,
	1,0,0,0,111,90,1,0,0,0,111,92,1,0,0,0,111,96,1,0,0,0,111,98,1,0,0,0,111,
	100,1,0,0,0,111,102,1,0,0,0,111,104,1,0,0,0,111,107,1,0,0,0,111,110,1,0,
	0,0,112,22,1,0,0,0,113,115,7,6,0,0,114,113,1,0,0,0,115,116,1,0,0,0,116,
	114,1,0,0,0,116,117,1,0,0,0,117,126,1,0,0,0,118,122,5,59,0,0,119,121,8,
	7,0,0,120,119,1,0,0,0,121,124,1,0,0,0,122,120,1,0,0,0,122,123,1,0,0,0,123,
	126,1,0,0,0,124,122,1,0,0,0,125,114,1,0,0,0,125,118,1,0,0,0,126,127,1,0,
	0,0,127,128,6,11,0,0,128,24,1,0,0,0,12,0,42,47,51,56,60,65,71,111,116,122,
	125,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!tispLexer.__ATN) {
			tispLexer.__ATN = new ATNDeserializer().deserialize(tispLexer._serializedATN);
		}

		return tispLexer.__ATN;
	}


	static DecisionsToDFA = tispLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}