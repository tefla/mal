import type { AstNode } from "./AST";
import { Env } from "./env";

export type TispType = 
  NumberType 
  | ListType 
  | VectorType 
  | FunctionType 
  | TispProgramType 
  | BooleanType 
  | NilType 
  | StringType
  | KeywordType
  | AtomType
  | SymbolType
  | HashMapType;

export const enum Node {
  Number  = "Number",
  Ident = "Ident",
  List = "List",
  Vector = "Vector",
  Function = "Function",
  Program = "Program",
  Boolean = "Boolean",
  Nil = "Nil",
  String = "String",
  Keyword = "Keyword",
  Atom = "Atom",
  Symbol = "Symbol",
  HashMap = "HashMap",
}
export class HashMapType {
  type: Node.HashMap = Node.HashMap;
  stringMap: { [key: string]: TispType } = {};
  keywordMap = new Map<TispType, TispType>();

  constructor(list: TispType[]) {
      while (list.length !== 0) {
          const key = list.shift()!;
          const value = list.shift();
          if (value == null) {
              throw new Error("unexpected hash length");
          }
          if (key.type === Node.Keyword) {
              this.keywordMap.set(key, value);
          } else if (key.type === Node.String) {
              this.stringMap[key.value] = value;
          } else {
              throw new Error(`unexpected key symbol: ${key.type}, expected: keyword or string`);
          }
      }
  }

  has(key: KeywordType | StringType) {
      if (key.type === Node.Keyword) {
          return !!this.keywordMap.get(key);
      }
      return !!this.stringMap[key.value];
  }

  get(key: KeywordType | StringType) {
      if (key.type === Node.Keyword) {
          return this.keywordMap.get(key) || Nil;
      }
      return this.stringMap[key.value] || Nil;
  }

  entries(): [TispType, TispType][] {
      const list: [TispType, TispType][] = [];

      this.keywordMap.forEach((v, k) => {
          list.push([k, v]);
      });
      Object.keys(this.stringMap).forEach(v => list.push([new StringType(v), this.stringMap[v]]));

      return list;
  }

  keys(): TispType[] {
      const list: TispType[] = [];
      this.keywordMap.forEach((_v, k) => {
          list.push(k);
      });
      Object.keys(this.stringMap).forEach(v => list.push(new StringType(v)));
      return list;
  }

  vals(): TispType[] {
      const list: TispType[] = [];
      this.keywordMap.forEach(v => {
          list.push(v);
      });
      Object.keys(this.stringMap).forEach(v => list.push(this.stringMap[v]));
      return list;
  }

  assoc(args: TispType[]): HashMapType {
      const list: TispType[] = [];
      this.keywordMap.forEach((value, key) => {
          list.push(key);
          list.push(value);
      });
      Object.keys(this.stringMap).forEach(keyStr => {
          list.push(new StringType(keyStr));
          list.push(this.stringMap[keyStr]);
      });

      return new HashMapType(list.concat(args));
  }

  dissoc(args: TispType[]): HashMapType {
      const newHashMap = this.assoc([]);

      args.forEach(arg => {
          if (arg.type === Node.String) {
              delete newHashMap.stringMap[arg.value];
          } else if (arg.type === Node.Keyword) {
              newHashMap.keywordMap.delete(arg);
          } else {
              throw new Error(`unexpected symbol: ${arg.type}, expected: keyword or string`);
          }
      });
      return newHashMap;
  }
  toString(): string {
    return `{${this.entries().map(([k, v]) => `${k.toString()} ${v.toString()}`).join(", ")}}`;
  }
}

export class AtomType {
  type: Node.Atom = Node.Atom;
  constructor(public value: TispType) {
  }
  toString(): string {
    return `(atom ${this.value.toString()})`;
  }
}
// StringType
export class StringType {
  type: Node.String = Node.String;
  constructor(public value: string) {
  }
  toString(): string {
    return `"${this.value}"`;
  }
}

export class TispProgramType {
  type: Node.Program = Node.Program;
  constructor(public elements: TispType[]) {
  }
  toString(): string {
    return this.elements.map(node => node.toString()).join(" ");
  }
}
// AtomType
export class VectorType  {
  type: Node.Vector = Node.Vector;
  constructor(public elements: TispType[]) {
  }
  toString(): string {
    return `[${this.elements.map(node => node.toString()).join(" ")}]`;
  }
}

type TispF = (...args: (TispType | undefined)[]) => TispType;


// FunctionType
export class FunctionType  {

  static fromBootstrap = (func: TispF) => {
    const f = new FunctionType();
    f.func = func;
    return f;
  }
  
  static fromAst = (eval_mal: (ast: TispType, env: Env) => TispType , env: Env, params: string[], body: TispType) => {
    const f = new FunctionType();
    f.env = env;
    f.params = params;
    f.body = body;
    f.func = (...args) => {
      const newEnv = new Env(env, params, args);
      return eval_mal(body, newEnv);
    }
    return f;
  }

  type: Node.Function = Node.Function;
  env?: Env;
  params?: string[];
  body?: TispType;
  
  is_macro = false;
  func?: TispF ;

  private constructor() {
    
  }
  toString(): string {
    return "#<function>";
  }
  newEnv(args: TispType[]) {
    return new Env(this.env, this.params, args);
  }
  toMacro = () => {
    const f = new FunctionType();
    f.env = this.env;
    f.params = this.params;
    f.body = this.body;
    f.func = this.func;
    f.is_macro = true;
    return f;
  }

}

// List Type
export class ListType  {
  type: Node.List = Node.List;
  constructor(public elements: TispType[]) {
  }
  toString(): string {
    return `(${this.elements.map(node => node.toString()).join(" ")})`;
  }
}

// NumberType
export class NumberType  {
  type: Node.Number = Node.Number;

  constructor(public value: number) {
  }
  toString(): string {
    return this.value.toString();
  }
}

export class SymbolType {
  type: Node.Symbol = Node.Symbol;
  static map = new Map<symbol, SymbolType>();

  static get(name: string): TispType {
    const sym = Symbol.for(name);
    let token = this.map.get(sym);
    if (token) {
        return token;
    }
    token = new SymbolType(name);
    this.map.set(sym, token);
    return token;
  }
  private constructor(public value: string) {}

  toString(): string {
    return this.value;
  }
} 

// KeywordType
export class KeywordType {
  type: Node.Keyword = Node.Keyword;
  constructor(public value: string) {
  }
  static map = new Map<symbol, KeywordType>();

  static get(name: string): KeywordType {
      const sym = Symbol.for(name);
      let token = this.map.get(sym);
      if (token) {
          return token;
      }
      token = new KeywordType(name);
      this.map.set(sym, token);
      return token;
  }

  toString(): string {
    return this.value;
  }
}

// BooleanType
class BooleanType  {
  type: Node.Boolean = Node.Boolean;
  constructor(public value: boolean) {
  }
  toString(): string {
    return this.value.toString();
  }
}

class NilType {
  type: Node.Nil = Node.Nil;
  toString(): string {
    return "nil";
  }
}

export const True = new BooleanType(true);
export const False = new BooleanType(false);
export const Nil = new NilType();

export function equals(a: TispType, b: TispType): boolean {
  const types = [a.type, b.type]
  
  if((isSeq(a) && isSeq(b)) || a.type === b.type){
  switch (a.type) {
    case Node.Number:
      return a.value === (b as NumberType).value;
    case Node.Symbol:
      return a.value === (b as SymbolType).value;
    case Node.Boolean:
      return a.value === (b as BooleanType).value;
    case Node.Nil:
      return true;
    case Node.List:
      return equalsArray(a.elements, (b as ListType).elements);
    case Node.Vector:
      return equalsArray(a.elements, (b as VectorType).elements);
    case Node.String:
      return a.value === (b as StringType).value;
    case Node.Keyword:
      return a.value === (b as KeywordType).value;
  }
  }
  return false;
  
}

export function equalsArray(a: TispType[], b: TispType[]): boolean {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (!equals(a[i], b[i])) {
      return false;
    }
  }
  return true;
}

export function equalsMap(a: Map<string, TispType>, b: Map<string, TispType>): boolean {
  if (a.size !== b.size) {
    return false;
  }
  for (const [key, value] of a) {
    if (!equals(value, b.get(key))) {
      return false;
    }
  }
  return true;
}

// Equality

export function isSeq(ast: TispType): ast is ListType | VectorType {
  return ast.type === Node.List || ast.type === Node.Vector;
}

