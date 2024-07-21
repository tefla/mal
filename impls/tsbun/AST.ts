import {first, last, T} from "lodash/fp";
import {VectorType, MapType, BaseType, FunctionType, True} from "./types";

import {Env} from "./env.ts";


export abstract class AstNode<T = BaseType> {
    abstract toString(): string;

    abstract eval(env: Env): T;

    abstract toJson(): any;

}

export class AtomNode extends AstNode {
    constructor(public value: any) {
        super();
    }

    toString() {
        return this.value;
    }

    eval(env: Env) {
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

    eval(env: Env) {
        if (this.elements.length === 0) return this;
        // Get the first element of the list
        const firstElement = this.elements[0];
        let fn = null
        let fnName = null

        // If the first element is an instance of SExprNode
        if (firstElement instanceof ListNode) {
            fn = firstElement.eval(env);
            
        } else {
            // If the first element is an instance of IdNode
            fnName = this.elements[0].toString();
        }

        if (fnName === "def!") {
            const [key, value] = this.elements.slice(1);
            const evalValue = value.eval(env);
            env.set(key.toString(), evalValue);
            return evalValue;
        }
        if (fnName === "let*") {
            const [bindings, body] = this.elements.slice(1) as [ListNode, AstNode];
            const newEnv = new Env(env);
            bindings.elements.forEach(node => {
                const arrayNode = node as ArrayNode;
                for (let i = 0; i < arrayNode.elements.length; i += 2) {
                    const key = arrayNode.elements[i];
                    const value = arrayNode.elements[i + 1];
                    newEnv.set(key.toString(), value.eval(newEnv));
                }
                // Evaluate the body with the new environment
            })
            return body.eval(newEnv);
        }
        if (fnName === "do") {
            return last(this.elements.slice(1).map(node => node.eval(env)));
        }
        if (fnName === "fn*") {
            const [params, body] = this.elements.slice(1);
            if(!(params instanceof ListNode)) {
                throw new Error("Invalid function definition");
            }
            const paramList = first(params.elements);
            if(!(paramList instanceof ListNode)) {
                throw new Error("Invalid function definition");
            }
            const paramNames = paramList.elements.map(node => node.toString());

            return new FunctionType(paramNames, body);
        }
        if (fnName === "if") {
            const [condition, trueBranch, falseBranch] = this.elements.slice(1);
            const result = condition.eval(env);
            if (result === True) {
                return trueBranch.eval(env);
            } else {
                return falseBranch.eval(env);
            }
        }
            
        
        const args = this.elements.slice(1).map(node => node.eval(env));
        if(fn instanceof FunctionType) {
            const newEnv = new Env(env, fn.params, args);
            return fn.body.eval(newEnv);
        } else {
            const fn = env.get(fnName);
            if (!fn) throw new Error(`${fnName} not found`);
            // Get the rest of the elements
            return fn(...args);
    
        }
    }
}

export class ArrayNode extends AstNode<VectorType> {
    constructor(public elements: AstNode[]) {
        super();
    }

    toString() {
        return `[${this.elements.map(node => node.toString()).join(" ")}]`;
    }

    eval(env: Env) {
        const res = this.elements.map(node => node.eval(env));
        return new VectorType(res);
    }

    toJson(): any {
        return {type: "array", value: this.elements.map(node => node.toJson())}

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

    eval(env: Env): any {
        return {[this.key]: this.value.eval(env)};
    }

    toJson(): any {
        return {type: "key", key: this.key, value: this.value.toJson()}
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
        return {type: "tisp", value: this.s_expr_list.map(node => node.toJson())}
    }
}
/*
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
        return {type: "sexp", value: this.children.map(node => node.toJson())}
    }
}
*/
// IdNode is a node that represents an identifier
export class IdNode extends AtomNode {
    constructor(public value: string) {
        super(value);
    }

    toString() {
        return this.value;
    }

    eval(env: Env) {
        return env.get(this.value);
    }

    toJson(): any {
        return {type: "id", value: this.value}
    }

}