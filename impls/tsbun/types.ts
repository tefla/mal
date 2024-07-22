import type { AstNode } from "./AST";
import { Env } from "./env";

export type TispType = 
  NumberType 
  | ListType 
  | IdentType 
  | VectorType 
  | FunctionType 
  | TispProgramType 
  | BooleanType 
  | NilType 
  | StringType
  | AtomType;

// Equality

export function isSeq(ast: TispType): ast is ListType | VectorType {
  return ast.type === Node.List || ast.type === Node.Vector;
}

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
  Atom = "Atom",
}

// AtomType
export class AtomType {
  type: Node.Atom = Node.Atom;
  constructor(public value: string) {
  }
  toString(): string {
    return this.value;
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


// FunctionType
export class FunctionType  {
  type: Node.Function = Node.Function;
  public  func: (...args: TispType[]) => TispType ;

  static fromBootstrap = (func: (...args: TispType[]) => TispType) => {
    const f = new FunctionType({}, [], Nil);
    f.func = func;
    return f;
  }
  
  static fromAst = (eval_mal: (ast: TispType, env: Env) => TispType , env: Env, params: string[], body: TispType) => {
    const f = new FunctionType(env, params, body);
    f.func = (...args: TispType[]) => {
      const newEnv = new Env(env, params, args);
      return eval_mal(body, newEnv);
    }
    return f;
  }
  private constructor(public env: Env, public params: string[], public body?: TispType) {
    this.func = (...args: TispType[]) => {
     throw new Error("Not implemented");
    }
  }
  toString(): string {
    return "#<function>";
  }
  newEnv(args: TispType[]) {
    return new Env(this.env, this.params, args);
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
// IdentType
export class IdentType  {
  type: Node.Ident = Node.Ident;
  constructor(public value: string) {
  }
  toString(): string {
    return this.value;
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
    case Node.Ident:
      return a.value === (b as IdentType).value;
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
    case Node.Atom:
      return a.value === (b as AtomType).value;
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