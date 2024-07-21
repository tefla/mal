import type { AstNode } from "./AST";
import { Env } from "./env";

export type TispType = NumberType | ListType | IdentType | VectorType | FunctionType | ProgramType;

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
    const f = new FunctionType([]);
    f.func = func;
    return f;
  }
  

  constructor(public params: string[], public body?: AstNode) {
    this.func = (...args: TispType[]) => {
     return new NumberType(0);
    }
  }
  toString(): string {
    return "#<function>";
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