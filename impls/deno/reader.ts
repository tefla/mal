import { VectorType, ListType, NumberType, type TispType, TispProgramType, StringType, KeywordType, Nil, True, False, SymbolType, HashMapType } from "./types.ts";

const last = <T>(xs: T[]): T => xs[xs.length - 1];



class Reader {
    position = 0;

    constructor(private tokens: string[]) { }

    next(): string {
        const ret = this.peek();
        this.position += 1;
        return ret;
    }

    peek(): string {
        return this.tokens[this.position];
    }
}

export function readStr(input: string): TispType {
    const tokens = tokenizer(input);
    const reader = new Reader(tokens);
    return readForm(reader);
}

function tokenizer(input: string): string[] {
    const regexp = /[\s,]*(~@|[\[\]{}()'`~^@]|"(?:\\.|[^\\"])*"?|;.*|[^\s\[\]{}('"`,;)]*)/g;
    const tokens: string[] = [];
    while (true) {
        const matches = regexp.exec(input);
        if (!matches) {
            break;
        }
        const match = matches[1];
        if (match === "") {
            break;
        }
        if (match[0] !== ";") {
            tokens.push(match);
        }
    }

    return tokens;
}

function readForm(reader: Reader): TispType {
    const token = reader.peek();
    switch (token) {
        case "(":
            return readList(reader);
        case "[":
            return readVector(reader);
        case "{":
            return readHashMap(reader);
        case "'":
            return readSymbol("quote");
        case "`":
            return readSymbol("quasiquote");
        case "~":
            return readSymbol("unquote");
        case "~@":
            return readSymbol("splice-unquote");
        case "@":
            return readSymbol("deref");
        // case "^":
        //     {
        //         reader.next();
        //         const sym = MalSymbol.get("with-meta");
        //         const target = readForm(reader);
        //         return new MalList([sym, readForm(reader), target]);
        //     }
        default:
            return readAtom(reader);
    }

    function readSymbol(name: string) {
        reader.next();
        const sym = SymbolType.get(name);
        const target = readForm(reader);
        return new ListType([sym, target]);
    }
}

function readList(reader: Reader): TispType {
    return readParen(reader, ListType, "(", ")");
}

function readVector(reader: Reader): TispType {
    return readParen(reader, VectorType, "[", "]");
}

function readHashMap(reader: Reader): TispType {
    return readParen(reader, HashMapType, "{", "}");
}

function readParen(reader: Reader, ctor: { new(list: TispType[]): TispType; }, open: string, close: string): TispType {
    const token = reader.next(); // drop open paren
    if (token !== open) {
        throw new Error(`unexpected token ${token}, expected ${open}`);
    }
    const list: TispType[] = [];
    while (true) {
        const next = reader.peek();
        if (next === close) {
            break;
        } else if (!next) {
            throw new Error("unexpected EOF");
        }
        list.push(readForm(reader));
    }
    reader.next(); // drop close paren

    return new ctor(list);
}

function readAtom(reader: Reader): TispType {
    const token = reader.next();
    if (token.match(/^-?[0-9]+$/)) {
        const v = parseInt(token, 10);
        return new NumberType(v);
    }
    if (token.match(/^-?[0-9]\.[0-9]+$/)) {
        const v = parseFloat(token);
        return new NumberType(v);
    }
    if (token.match(/^"(?:\\.|[^\\"])*"$/)) {
        const v = token.slice(1, token.length - 1)
            .replace(/\\(.)/g, (_, c: string) => c == 'n' ? '\n' : c)
        return new StringType(v);
    }
    if (token[0] === '"') {
        throw new Error("expected '\"', got EOF");
    }
    if (token[0] === ":") {
        return KeywordType.get(token.substring(1));
    }
    switch (token) {
        case "nil":
            return Nil;
        case "true":
            return True;
        case "false":
            return False;
    }

    return SymbolType.get(token);
}
