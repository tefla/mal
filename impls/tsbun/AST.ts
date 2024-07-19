import { last } from "lodash/fp";
import {ArrayType, AtomType, MapType} from "./types";
import type { BaseType } from "typescript";
import type {Env} from "./env.ts";
import {Env} from "./env.ts";

export abstract class AstNode<T = BaseType> {
  abstract toString(): string;

  abstract eval(env: Env): T;

  abstract toJson(): any;

}
export class AtomNode extends AstNode<AtomType> {
  constructor(public value: any) {
    super();
  }

  toString() {
    console.log("AtomNode toString", this.value)
    return this.value;
  }

  eval(env: Env) {
    console.log("AtomNode eval", this.value)
    return new AtomType(this.value);
  }

  toJson(): any {
    return { type: "atom", value: this.value }
  }
}

export class ListNode extends AstNode {
  constructor(public elements: AstNode[]) {
    super();
  }

  toString() {
    return `(${this.elements.map(node => node.toString()).join(" ")})`;
  }

  toJson(): any {
    return { type: "list", value: this.elements.map(node => node.toJson()) }
  }

  eval(env: Env) {
    if (this.elements.length === 0) return this;
    // Get the first element of the list
    const fnName = this.elements[0].eval(env).valueOf();
    if(typeof fnName !== "string") throw new Error(`Expected function name to be a string, got ${fnName}`);

    switch (fnName) {
      case "def!":
      {
        const [key, value] = this.elements.slice(1);
        const val = value.eval(env);
        env.set(key.toString(), val);
        return val;
      }

      default: {
        const context = env.find(fnName);
        const fn = context?.get(fnName);
        if (!fn) throw new Error(`Unknown function ${fnName}`);
        const args = this.elements.slice(1).map(node => node.eval(env));
        return fn(...args);
      }
    }
  }
}

export class ArrayNode extends AstNode<ArrayType> {
  constructor(public elements: AstNode[]) {
    super();
  }

  toString() {
    return `[${this.elements.map(node => node.toString()).join(" ")}]`;
  }

  eval(env: Env) {
    const res = this.elements.map(node => node.eval(env));
    return new ArrayType(res);
  }

  toJson(): any {
    return { type: "array", value: this.elements.map(node => node.toJson()) }

  }
}

export class MapNode extends AstNode<MapType> {
  constructor(public elements: AstNode[]) {
    super();
  }

  toString() {
    return `{${this.elements.map(node => {
      node.toString()
    }).join(" ")}}`;
  }

  eval(env: Env) {
    return MapType.from(this.elements.map(node => node.eval(env)));
  }

  toJson(): any {
    return { type: "map", value: this.elements.map(node => node.toJson()) }
  }
}

class KeyNode extends AstNode {
  constructor(public key: string, public value: AstNode) {
    super();
  }

  toString() {
    return `${this.key} ${this.value.toString()}`;
  }

  eval(env: Env): any {
    return { [this.key]: this.value.eval(env) };
  }

  toJson(): any {
    return { type: "key", key: this.key, value: this.value.toJson() }
  }
}

export class TispNode extends AstNode<any> {
  constructor(public s_expr_list: AstNode[]) {
    super();
  }

  toString() {
    return this.s_expr_list.map(node => node.toString()).join(" ");
  }

  eval(env: Env) {
    return last(this.s_expr_list.map(node => node.eval(env)));
  }

  toJson(): any {
    return { type: "tisp", value: this.s_expr_list.map(node => node.toJson()) }
  }
}

export class SExprNode extends AstNode {
  constructor(public children: AstNode[]) {
    super();
  }

  toString() {
    return this.children.map(node => node.toString()).join(" ");
  }

  eval(env: Env): any {
    return last(this.children.map(node => node.eval(env)));
  }

  toJson(): any {
    return { type: "sexp", value: this.children.map(node => node.toJson()) }
  }
}

// IDNode for identifiers
export class IDNode extends AtomNode {
  constructor(public value: string) {
    super(value);
  }
  eval(env: Env): AtomType {
    const val = env.get(this.value);
    return val;
  }

}