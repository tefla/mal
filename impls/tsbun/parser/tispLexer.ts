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
	public static readonly OPS = 7;
	public static readonly NUMBER = 8;
	public static readonly STRING = 9;
	public static readonly ID = 10;
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
                                                             null, "OPS", 
                                                             "NUMBER", "STRING", 
                                                             "ID", "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "OPS", "NUMBER", "STRING", 
		"ID", "ESC", "UNICODE", "HEX", "WS",
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

	public static readonly _serializedATN: number[] = [4,0,11,116,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,1,0,1,0,1,1,1,1,1,2,1,2,1,3,
	1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,3,7,45,8,7,1,7,5,7,48,8,7,10,7,12,7,51,
	9,7,1,7,3,7,54,8,7,1,7,4,7,57,8,7,11,7,12,7,58,1,8,1,8,1,8,5,8,64,8,8,10,
	8,12,8,67,9,8,1,8,1,8,1,8,1,8,5,8,73,8,8,10,8,12,8,76,9,8,1,8,3,8,79,8,
	8,1,9,1,9,5,9,83,8,9,10,9,12,9,86,9,9,1,10,1,10,1,10,3,10,91,8,10,1,11,
	1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,13,4,13,102,8,13,11,13,12,13,103,1,
	13,1,13,5,13,108,8,13,10,13,12,13,111,9,13,3,13,113,8,13,1,13,1,13,0,0,
	14,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,0,23,0,25,0,27,11,1,
	0,10,7,0,37,37,42,43,45,45,47,47,58,58,60,62,94,94,1,0,48,57,2,0,34,34,
	92,92,2,0,39,39,92,92,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,97,122,
	8,0,34,34,47,47,92,92,98,98,102,102,110,110,114,114,116,116,3,0,48,57,65,
	70,97,102,4,0,9,10,13,13,32,32,44,44,2,0,10,10,13,13,126,0,1,1,0,0,0,0,
	3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,
	0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,27,1,0,0,0,1,29,1,0,0,0,3,31,1,
	0,0,0,5,33,1,0,0,0,7,35,1,0,0,0,9,37,1,0,0,0,11,39,1,0,0,0,13,41,1,0,0,
	0,15,44,1,0,0,0,17,78,1,0,0,0,19,80,1,0,0,0,21,87,1,0,0,0,23,92,1,0,0,0,
	25,98,1,0,0,0,27,112,1,0,0,0,29,30,5,40,0,0,30,2,1,0,0,0,31,32,5,41,0,0,
	32,4,1,0,0,0,33,34,5,91,0,0,34,6,1,0,0,0,35,36,5,93,0,0,36,8,1,0,0,0,37,
	38,5,123,0,0,38,10,1,0,0,0,39,40,5,125,0,0,40,12,1,0,0,0,41,42,7,0,0,0,
	42,14,1,0,0,0,43,45,5,45,0,0,44,43,1,0,0,0,44,45,1,0,0,0,45,53,1,0,0,0,
	46,48,7,1,0,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,
	52,1,0,0,0,51,49,1,0,0,0,52,54,5,46,0,0,53,49,1,0,0,0,53,54,1,0,0,0,54,
	56,1,0,0,0,55,57,7,1,0,0,56,55,1,0,0,0,57,58,1,0,0,0,58,56,1,0,0,0,58,59,
	1,0,0,0,59,16,1,0,0,0,60,65,5,34,0,0,61,64,3,21,10,0,62,64,8,2,0,0,63,61,
	1,0,0,0,63,62,1,0,0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,68,1,
	0,0,0,67,65,1,0,0,0,68,79,5,34,0,0,69,74,5,39,0,0,70,73,3,21,10,0,71,73,
	8,3,0,0,72,70,1,0,0,0,72,71,1,0,0,0,73,76,1,0,0,0,74,72,1,0,0,0,74,75,1,
	0,0,0,75,77,1,0,0,0,76,74,1,0,0,0,77,79,5,39,0,0,78,60,1,0,0,0,78,69,1,
	0,0,0,79,18,1,0,0,0,80,84,7,4,0,0,81,83,7,5,0,0,82,81,1,0,0,0,83,86,1,0,
	0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,20,1,0,0,0,86,84,1,0,0,0,87,90,5,92,
	0,0,88,91,7,6,0,0,89,91,3,23,11,0,90,88,1,0,0,0,90,89,1,0,0,0,91,22,1,0,
	0,0,92,93,5,117,0,0,93,94,3,25,12,0,94,95,3,25,12,0,95,96,3,25,12,0,96,
	97,3,25,12,0,97,24,1,0,0,0,98,99,7,7,0,0,99,26,1,0,0,0,100,102,7,8,0,0,
	101,100,1,0,0,0,102,103,1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,113,
	1,0,0,0,105,109,5,59,0,0,106,108,8,9,0,0,107,106,1,0,0,0,108,111,1,0,0,
	0,109,107,1,0,0,0,109,110,1,0,0,0,110,113,1,0,0,0,111,109,1,0,0,0,112,101,
	1,0,0,0,112,105,1,0,0,0,113,114,1,0,0,0,114,115,6,13,0,0,115,28,1,0,0,0,
	15,0,44,49,53,58,63,65,72,74,78,84,90,103,109,112,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!tispLexer.__ATN) {
			tispLexer.__ATN = new ATNDeserializer().deserialize(tispLexer._serializedATN);
		}

		return tispLexer.__ATN;
	}


	static DecisionsToDFA = tispLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}