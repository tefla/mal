// Generated from /Users/tim/dev/playground/mal/impls/tsbun/tisp.g4 by ANTLR 4.13.1
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
	public static readonly ID = 7;
	public static readonly LABEL = 8;
	public static readonly NUMBER = 9;
	public static readonly STRING = 10;
	public static readonly OP = 11;
	public static readonly WS = 12;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'('", 
                                                            "')'", "'['", 
                                                            "']'", "'{'", 
                                                            "'}'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "ID", 
                                                             "LABEL", "NUMBER", 
                                                             "STRING", "OP", 
                                                             "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "ID", "LABEL", "NUMBER", 
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

	public static readonly _serializedATN: number[] = [4,0,12,130,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,
	1,6,4,6,39,8,6,11,6,12,6,40,1,6,5,6,44,8,6,10,6,12,6,47,9,6,1,7,1,7,1,7,
	1,8,3,8,53,8,8,1,8,5,8,56,8,8,10,8,12,8,59,9,8,1,8,3,8,62,8,8,1,8,4,8,65,
	8,8,11,8,12,8,66,1,9,1,9,5,9,71,8,9,10,9,12,9,74,9,9,1,9,1,9,1,10,1,10,
	1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
	10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
	1,10,1,10,1,10,1,10,3,10,113,8,10,1,11,4,11,116,8,11,11,11,12,11,117,1,
	11,1,11,5,11,122,8,11,10,11,12,11,125,9,11,3,11,127,8,11,1,11,1,11,0,0,
	12,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,1,0,8,3,0,
	65,90,95,95,97,122,8,0,33,33,42,42,45,45,48,57,63,63,65,90,95,95,97,122,
	1,0,48,57,1,0,34,34,6,0,37,37,42,43,45,45,47,47,61,61,94,94,3,0,38,38,124,
	124,126,126,4,0,9,10,13,13,32,32,44,44,2,0,10,10,13,13,156,0,1,1,0,0,0,
	0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,
	0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,1,25,
	1,0,0,0,3,27,1,0,0,0,5,29,1,0,0,0,7,31,1,0,0,0,9,33,1,0,0,0,11,35,1,0,0,
	0,13,38,1,0,0,0,15,48,1,0,0,0,17,52,1,0,0,0,19,68,1,0,0,0,21,112,1,0,0,
	0,23,126,1,0,0,0,25,26,5,40,0,0,26,2,1,0,0,0,27,28,5,41,0,0,28,4,1,0,0,
	0,29,30,5,91,0,0,30,6,1,0,0,0,31,32,5,93,0,0,32,8,1,0,0,0,33,34,5,123,0,
	0,34,10,1,0,0,0,35,36,5,125,0,0,36,12,1,0,0,0,37,39,7,0,0,0,38,37,1,0,0,
	0,39,40,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,45,1,0,0,0,42,44,7,1,0,0,
	43,42,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,14,1,0,0,0,47,
	45,1,0,0,0,48,49,5,58,0,0,49,50,3,13,6,0,50,16,1,0,0,0,51,53,5,45,0,0,52,
	51,1,0,0,0,52,53,1,0,0,0,53,61,1,0,0,0,54,56,7,2,0,0,55,54,1,0,0,0,56,59,
	1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,60,1,0,0,0,59,57,1,0,0,0,60,62,5,
	46,0,0,61,57,1,0,0,0,61,62,1,0,0,0,62,64,1,0,0,0,63,65,7,2,0,0,64,63,1,
	0,0,0,65,66,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,18,1,0,0,0,68,72,5,34,
	0,0,69,71,8,3,0,0,70,69,1,0,0,0,71,74,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,
	0,73,75,1,0,0,0,74,72,1,0,0,0,75,76,5,34,0,0,76,20,1,0,0,0,77,113,7,4,0,
	0,78,79,5,33,0,0,79,113,5,61,0,0,80,113,5,60,0,0,81,82,5,60,0,0,82,113,
	5,61,0,0,83,113,5,62,0,0,84,85,5,62,0,0,85,113,5,61,0,0,86,87,5,38,0,0,
	87,113,5,38,0,0,88,89,5,124,0,0,89,113,5,124,0,0,90,113,5,33,0,0,91,92,
	5,45,0,0,92,113,5,62,0,0,93,94,5,45,0,0,94,95,5,45,0,0,95,96,5,62,0,0,96,
	113,5,62,0,0,97,98,5,43,0,0,98,113,5,43,0,0,99,100,5,45,0,0,100,113,5,45,
	0,0,101,102,5,60,0,0,102,113,5,60,0,0,103,104,5,62,0,0,104,113,5,62,0,0,
	105,106,5,62,0,0,106,107,5,62,0,0,107,113,5,62,0,0,108,109,5,60,0,0,109,
	110,5,60,0,0,110,113,5,60,0,0,111,113,7,5,0,0,112,77,1,0,0,0,112,78,1,0,
	0,0,112,80,1,0,0,0,112,81,1,0,0,0,112,83,1,0,0,0,112,84,1,0,0,0,112,86,
	1,0,0,0,112,88,1,0,0,0,112,90,1,0,0,0,112,91,1,0,0,0,112,93,1,0,0,0,112,
	97,1,0,0,0,112,99,1,0,0,0,112,101,1,0,0,0,112,103,1,0,0,0,112,105,1,0,0,
	0,112,108,1,0,0,0,112,111,1,0,0,0,113,22,1,0,0,0,114,116,7,6,0,0,115,114,
	1,0,0,0,116,117,1,0,0,0,117,115,1,0,0,0,117,118,1,0,0,0,118,127,1,0,0,0,
	119,123,5,59,0,0,120,122,8,7,0,0,121,120,1,0,0,0,122,125,1,0,0,0,123,121,
	1,0,0,0,123,124,1,0,0,0,124,127,1,0,0,0,125,123,1,0,0,0,126,115,1,0,0,0,
	126,119,1,0,0,0,127,128,1,0,0,0,128,129,6,11,0,0,129,24,1,0,0,0,12,0,40,
	45,52,57,61,66,72,112,117,123,126,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!tispLexer.__ATN) {
			tispLexer.__ATN = new ATNDeserializer().deserialize(tispLexer._serializedATN);
		}

		return tispLexer.__ATN;
	}


	static DecisionsToDFA = tispLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}