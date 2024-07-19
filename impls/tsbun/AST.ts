import {last} from "lodash/fp";
import {ArrayType, MapType} from "./types";

const context = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  '*': (a: number, b: number) => a * b,
  '/': (a: number, b: number) => a / b,
};

export class AtomNode extends AstNode {
  constructor(public value: any) {
    super();
  }

  toString() {
    return this.value;
  }

  eval() {
    return this.value;
  }

  toJson(): any {
    return {type: "atom", value: this.value}
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
    return {type: "list", value: this.elements.map(node => node.toJson())}
  }

  eval() {
    if (this.elements.length === 0) return this;
    // Get the first element of the list
    const fn = context[this.elements[0].eval()];
    if (!fn) throw new Error(`Unknown function ${this.elements[0].eval()}`);
    // Get the rest of the elements
    const args = this.elements.slice(1).map(node => node.eval());
    return fn(...args);
  }
}

export class ArrayNode extends AstNode {
  constructor(public elements: AstNode[]) {
    super();
  }

  toString() {
    return `[${this.elements.map(node => node.toString()).join(" ")}]`;
  }

  eval() {
    const res = this.elements.map(node => node.eval());
    return ArrayType.from(res)
  }

  toJson(): any {
    return {type: "array", value: this.elements.map(node => node.toJson())}

  }
}

export class MapNode extends AstNode {
  constructor(public elements: AstNode[]) {
    super();
  }

  toString() {
    return `{${this.elements.map(node => {
      node.toString()
    }).join(" ")}}`;
  }

  eval() {
    return MapType.from(this.elements.map(node => node.eval()));
  }

  toJson(): any {
    return {type: "map", value: this.elements.map(node => node.toJson())}
  }
}

class KeyNode extends AstNode {
  constructor(public key: string, public value: AstNode) {
    super();
  }

  toString() {
    return `${this.key} ${this.value.toString()}`;
  }

  eval(): any {
    return {[this.key]: this.value.eval()};
  }

  toJson(): any {
    return {type: "key", key: this.key, value: this.value.toJson()}
  }
}

export class TispNode extends AstNode {
  constructor(public s_expr_list: AstNode[]) {
    super();
  }

  toString() {
    return this.s_expr_list.map(node => node.toString()).join(" ");
  }

  eval() {
    return last(this.s_expr_list.map(node => node.eval()));
  }

  toJson(): any {
    return {type: "tisp", value: this.s_expr_list.map(node => node.toJson())}
  }
}

export class SExprNode extends AstNode {
  constructor(public children: AstNode[]) {
    super();
  }

  toString() {
    return this.children.map(node => node.toString()).join(" ");
  }

  eval(): any {
    return last(this.children.map(node => node.eval()));

  }

  toJson(): any {
    return {type: "sexp", value: this.children.map(node => node.toJson())}
  }
}

export abstract class AstNode {
  abstract toString(): string;

  abstract eval(): any;

  abstract toJson(): any;

}