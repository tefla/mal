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
	public static readonly OPS = 3;
	public static readonly NUMBER = 4;
	public static readonly STRING = 5;
	public static readonly ID = 6;
	public static readonly WS = 7;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'('", 
                                                            "')'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, "OPS", 
                                                             "NUMBER", "STRING", 
                                                             "ID", "WS" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "OPS", "NUMBER", "STRING", "ID", "ESC", "UNICODE", "HEX", 
		"WS",
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

	public static readonly _serializedATN: number[] = [4,0,7,100,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,
	9,1,0,1,0,1,1,1,1,1,2,1,2,1,3,3,3,29,8,3,1,3,5,3,32,8,3,10,3,12,3,35,9,
	3,1,3,3,3,38,8,3,1,3,4,3,41,8,3,11,3,12,3,42,1,4,1,4,1,4,5,4,48,8,4,10,
	4,12,4,51,9,4,1,4,1,4,1,4,1,4,5,4,57,8,4,10,4,12,4,60,9,4,1,4,3,4,63,8,
	4,1,5,1,5,5,5,67,8,5,10,5,12,5,70,9,5,1,6,1,6,1,6,3,6,75,8,6,1,7,1,7,1,
	7,1,7,1,7,1,7,1,8,1,8,1,9,4,9,86,8,9,11,9,12,9,87,1,9,1,9,5,9,92,8,9,10,
	9,12,9,95,9,9,3,9,97,8,9,1,9,1,9,0,0,10,1,1,3,2,5,3,7,4,9,5,11,6,13,0,15,
	0,17,0,19,7,1,0,10,7,0,37,37,42,43,45,45,47,47,58,58,60,62,94,94,1,0,48,
	57,2,0,34,34,92,92,2,0,39,39,92,92,3,0,65,90,95,95,97,122,4,0,48,57,65,
	90,95,95,97,122,8,0,34,34,47,47,92,92,98,98,102,102,110,110,114,114,116,
	116,3,0,48,57,65,70,97,102,4,0,9,10,13,13,32,32,44,44,2,0,10,10,13,13,110,
	0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,
	0,0,19,1,0,0,0,1,21,1,0,0,0,3,23,1,0,0,0,5,25,1,0,0,0,7,28,1,0,0,0,9,62,
	1,0,0,0,11,64,1,0,0,0,13,71,1,0,0,0,15,76,1,0,0,0,17,82,1,0,0,0,19,96,1,
	0,0,0,21,22,5,40,0,0,22,2,1,0,0,0,23,24,5,41,0,0,24,4,1,0,0,0,25,26,7,0,
	0,0,26,6,1,0,0,0,27,29,5,45,0,0,28,27,1,0,0,0,28,29,1,0,0,0,29,37,1,0,0,
	0,30,32,7,1,0,0,31,30,1,0,0,0,32,35,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,
	34,36,1,0,0,0,35,33,1,0,0,0,36,38,5,46,0,0,37,33,1,0,0,0,37,38,1,0,0,0,
	38,40,1,0,0,0,39,41,7,1,0,0,40,39,1,0,0,0,41,42,1,0,0,0,42,40,1,0,0,0,42,
	43,1,0,0,0,43,8,1,0,0,0,44,49,5,34,0,0,45,48,3,13,6,0,46,48,8,2,0,0,47,
	45,1,0,0,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,52,
	1,0,0,0,51,49,1,0,0,0,52,63,5,34,0,0,53,58,5,39,0,0,54,57,3,13,6,0,55,57,
	8,3,0,0,56,54,1,0,0,0,56,55,1,0,0,0,57,60,1,0,0,0,58,56,1,0,0,0,58,59,1,
	0,0,0,59,61,1,0,0,0,60,58,1,0,0,0,61,63,5,39,0,0,62,44,1,0,0,0,62,53,1,
	0,0,0,63,10,1,0,0,0,64,68,7,4,0,0,65,67,7,5,0,0,66,65,1,0,0,0,67,70,1,0,
	0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,12,1,0,0,0,70,68,1,0,0,0,71,74,5,92,
	0,0,72,75,7,6,0,0,73,75,3,15,7,0,74,72,1,0,0,0,74,73,1,0,0,0,75,14,1,0,
	0,0,76,77,5,117,0,0,77,78,3,17,8,0,78,79,3,17,8,0,79,80,3,17,8,0,80,81,
	3,17,8,0,81,16,1,0,0,0,82,83,7,7,0,0,83,18,1,0,0,0,84,86,7,8,0,0,85,84,
	1,0,0,0,86,87,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,97,1,0,0,0,89,93,5,
	59,0,0,90,92,8,9,0,0,91,90,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,93,94,1,
	0,0,0,94,97,1,0,0,0,95,93,1,0,0,0,96,85,1,0,0,0,96,89,1,0,0,0,97,98,1,0,
	0,0,98,99,6,9,0,0,99,20,1,0,0,0,15,0,28,33,37,42,47,49,56,58,62,68,74,87,
	93,96,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!tispLexer.__ATN) {
			tispLexer.__ATN = new ATNDeserializer().deserialize(tispLexer._serializedATN);
		}

		return tispLexer.__ATN;
	}


	static DecisionsToDFA = tispLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}