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
	public static readonly ID = 7;
	public static readonly NUMBER = 8;
	public static readonly STRING = 9;
	public static readonly OP = 10;
	public static readonly WS = 11;
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
                                                             "NUMBER", "STRING", 
                                                             "OP", "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "ID", "NUMBER", "STRING", 
		"OP", "WS",
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

	public static readonly _serializedATN: number[] = [4,0,11,128,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,3,6,37,
	8,6,1,6,4,6,40,8,6,11,6,12,6,41,1,6,5,6,45,8,6,10,6,12,6,48,9,6,1,7,3,7,
	51,8,7,1,7,5,7,54,8,7,10,7,12,7,57,9,7,1,7,3,7,60,8,7,1,7,4,7,63,8,7,11,
	7,12,7,64,1,8,1,8,5,8,69,8,8,10,8,12,8,72,9,8,1,8,1,8,1,9,1,9,1,9,1,9,1,
	9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
	9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,111,8,9,1,10,4,10,
	114,8,10,11,10,12,10,115,1,10,1,10,5,10,120,8,10,10,10,12,10,123,9,10,3,
	10,125,8,10,1,10,1,10,0,0,11,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,
	10,21,11,1,0,8,3,0,65,90,95,95,97,122,6,0,33,33,45,45,48,57,65,90,95,95,
	97,122,1,0,48,57,1,0,34,34,6,0,37,37,42,43,45,45,47,47,61,61,94,94,3,0,
	38,38,124,124,126,126,4,0,9,10,13,13,32,32,44,44,2,0,10,10,13,13,155,0,
	1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,
	0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,1,23,1,
	0,0,0,3,25,1,0,0,0,5,27,1,0,0,0,7,29,1,0,0,0,9,31,1,0,0,0,11,33,1,0,0,0,
	13,36,1,0,0,0,15,50,1,0,0,0,17,66,1,0,0,0,19,110,1,0,0,0,21,124,1,0,0,0,
	23,24,5,40,0,0,24,2,1,0,0,0,25,26,5,41,0,0,26,4,1,0,0,0,27,28,5,91,0,0,
	28,6,1,0,0,0,29,30,5,93,0,0,30,8,1,0,0,0,31,32,5,123,0,0,32,10,1,0,0,0,
	33,34,5,125,0,0,34,12,1,0,0,0,35,37,5,58,0,0,36,35,1,0,0,0,36,37,1,0,0,
	0,37,39,1,0,0,0,38,40,7,0,0,0,39,38,1,0,0,0,40,41,1,0,0,0,41,39,1,0,0,0,
	41,42,1,0,0,0,42,46,1,0,0,0,43,45,7,1,0,0,44,43,1,0,0,0,45,48,1,0,0,0,46,
	44,1,0,0,0,46,47,1,0,0,0,47,14,1,0,0,0,48,46,1,0,0,0,49,51,5,45,0,0,50,
	49,1,0,0,0,50,51,1,0,0,0,51,59,1,0,0,0,52,54,7,2,0,0,53,52,1,0,0,0,54,57,
	1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,58,1,0,0,0,57,55,1,0,0,0,58,60,5,
	46,0,0,59,55,1,0,0,0,59,60,1,0,0,0,60,62,1,0,0,0,61,63,7,2,0,0,62,61,1,
	0,0,0,63,64,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,16,1,0,0,0,66,70,5,34,
	0,0,67,69,8,3,0,0,68,67,1,0,0,0,69,72,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,
	0,71,73,1,0,0,0,72,70,1,0,0,0,73,74,5,34,0,0,74,18,1,0,0,0,75,111,7,4,0,
	0,76,77,5,33,0,0,77,111,5,61,0,0,78,111,5,60,0,0,79,80,5,60,0,0,80,111,
	5,61,0,0,81,111,5,62,0,0,82,83,5,62,0,0,83,111,5,61,0,0,84,85,5,38,0,0,
	85,111,5,38,0,0,86,87,5,124,0,0,87,111,5,124,0,0,88,111,5,33,0,0,89,90,
	5,45,0,0,90,111,5,62,0,0,91,92,5,45,0,0,92,93,5,45,0,0,93,94,5,62,0,0,94,
	111,5,62,0,0,95,96,5,43,0,0,96,111,5,43,0,0,97,98,5,45,0,0,98,111,5,45,
	0,0,99,100,5,60,0,0,100,111,5,60,0,0,101,102,5,62,0,0,102,111,5,62,0,0,
	103,104,5,62,0,0,104,105,5,62,0,0,105,111,5,62,0,0,106,107,5,60,0,0,107,
	108,5,60,0,0,108,111,5,60,0,0,109,111,7,5,0,0,110,75,1,0,0,0,110,76,1,0,
	0,0,110,78,1,0,0,0,110,79,1,0,0,0,110,81,1,0,0,0,110,82,1,0,0,0,110,84,
	1,0,0,0,110,86,1,0,0,0,110,88,1,0,0,0,110,89,1,0,0,0,110,91,1,0,0,0,110,
	95,1,0,0,0,110,97,1,0,0,0,110,99,1,0,0,0,110,101,1,0,0,0,110,103,1,0,0,
	0,110,106,1,0,0,0,110,109,1,0,0,0,111,20,1,0,0,0,112,114,7,6,0,0,113,112,
	1,0,0,0,114,115,1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,125,1,0,0,0,
	117,121,5,59,0,0,118,120,8,7,0,0,119,118,1,0,0,0,120,123,1,0,0,0,121,119,
	1,0,0,0,121,122,1,0,0,0,122,125,1,0,0,0,123,121,1,0,0,0,124,113,1,0,0,0,
	124,117,1,0,0,0,125,126,1,0,0,0,126,127,6,10,0,0,127,22,1,0,0,0,13,0,36,
	41,46,50,55,59,64,70,110,115,121,124,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!tispLexer.__ATN) {
			tispLexer.__ATN = new ATNDeserializer().deserialize(tispLexer._serializedATN);
		}

		return tispLexer.__ATN;
	}


	static DecisionsToDFA = tispLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}