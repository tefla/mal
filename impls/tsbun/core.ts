import { keys } from "lodash";
import { pr_str_antlr } from "./printer";
import { readStr } from "./reader";
import { FunctionType, NumberType, True, False, Nil, ListType, Node, equals, isSeq, StringType, type TispType, VectorType, AtomType, TispError, KeywordType, HashMapType, SymbolType } from "./types";
import {readFileSync} from "node:fs"
export const ns = {
    '+': FunctionType.fromBootstrap((a: NumberType, b: NumberType) => new NumberType(a.value + b.value)),
    '-': FunctionType.fromBootstrap((a: NumberType, b: NumberType) => new NumberType(a.value - b.value)),
    '*': FunctionType.fromBootstrap((a: NumberType, b: NumberType) => new NumberType(a.value * b.value)),
    '/': FunctionType.fromBootstrap((a: NumberType, b: NumberType) => new NumberType(a.value / b.value)),
    'true': True,
    'false': False,
    'nil': Nil,

    'list': FunctionType.fromBootstrap((...args) => {
        return new ListType(args);
    }),
    'list?': FunctionType.fromBootstrap((node) => {
        return node.type === Node.List ? True : False;
    }),
    'empty?': FunctionType.fromBootstrap((node) => {
        return node.elements.length === 0 ? True : False;
    }),
    'count': FunctionType.fromBootstrap((node) => {
        if (isSeq(node)) {
            return new NumberType(node.elements.length);
        }
        return 0;
    }),
    '=': FunctionType.fromBootstrap((a, b) => {
        return equals(a, b) ? True : False;
    }),
    '<': FunctionType.fromBootstrap((a, b) => {
        return a.value < b.value ? True : False;
    }),
    '>': FunctionType.fromBootstrap((a, b) => {
        return a.value > b.value ? True : False;
    }),
    '<=': FunctionType.fromBootstrap((a, b) => {
        return a.value <= b.value ? True : False;
    }),
    '>=': FunctionType.fromBootstrap((a, b) => {
        return a.value >= b.value ? True : False;
    }),
    'pr-str': FunctionType.fromBootstrap((...args: TispType[]) => {
        return new StringType(args.map(arg => pr_str_antlr(arg, true)).join(" "));
    }),
    'str': FunctionType.fromBootstrap((...args: TispType[]) => {
        return new StringType(args.map(arg => pr_str_antlr(arg, false)).join(""));
    }),
    'prn': FunctionType.fromBootstrap((...args: TispType[]) => {
        console.log(...args.map(arg => pr_str_antlr(arg, true)));
        return Nil;
    }),
    'println': FunctionType.fromBootstrap((...args: TispType[]) => {
        console.log(...args.map(arg => pr_str_antlr(arg, false)));
        return Nil;
    }),

    'read-string': FunctionType.fromBootstrap((str: StringType) => {
        return readStr(str.value);
    }),
    'slurp': FunctionType.fromBootstrap((str: StringType) => {
        return new StringType(readFileSync(str.value, 'utf-8'));
    }),
    'atom': FunctionType.fromBootstrap((node: TispType) => {
        return new AtomType(node);
    }),
    'atom?': FunctionType.fromBootstrap((node: TispType) => {
        return node.type === Node.Atom ? True : False;
    }),
    'deref': FunctionType.fromBootstrap((node: AtomType) => {
        if(node.type !== Node.Atom){
            throw new Error(`Expected atom but got ${node}`);
        }
        return node.value;
    }),
    'reset!': FunctionType.fromBootstrap((node: AtomType, value: TispType) => {
        if(node.type !== Node.Atom){
            throw new Error(`Expected atom but got ${node}`);
        }
        node.value = value;
        return value;
    }),
    'swap!': FunctionType.fromBootstrap((node: AtomType, func: FunctionType, ...args: TispType[]) => {
        if(node.type !== Node.Atom){
            throw new Error(`Expected atom but got ${node}`);
        }
        if(func.func === undefined){
            throw new Error(`Expected function but got ${func}`);
        }
        node.value = func.func(node.value, ...args);
        return node.value;
    }),
    'cons': FunctionType.fromBootstrap((node: TispType, list: ListType) => {
        if(!isSeq(list)){
            throw new Error(`Expected list but got ${list}`);
        }
        return new ListType([node, ...list.elements]);
    }),
    'concat': FunctionType.fromBootstrap((...lists: ListType[]) => {
        return new ListType(lists.reduce((acc, list) => acc.concat(list.elements), []));
    }),
    'vec': FunctionType.fromBootstrap((list: TispType) => {
        if(list.type === Node.Vector){
            return list;
        }
        if(!isSeq(list)){
            throw new Error(`Expected list but got ${list}`);
        }
        return new VectorType(list.elements);
    }),
    'nth': FunctionType.fromBootstrap((list: ListType, index: NumberType) => {
        if(!isSeq(list)){
            throw new Error(`Expected list but got ${list}`);
        }
        if(index.value < 0 || index.value >= list.elements.length){
            throw new Error(`Index out of bounds`);
        }
        return list.elements[index.value];
    }),
    'first': FunctionType.fromBootstrap((list: ListType) => {
        if(!isSeq(list) || list.elements.length === 0){
            return Nil;
        }
        return list.elements[0];
    }),
    'rest': FunctionType.fromBootstrap((list: ListType) => {
        if(!isSeq(list) || list.elements.length === 0){
            return new ListType([]);
        }
        
        return new ListType(list.elements.slice(1));
    }),
    'throw': FunctionType.fromBootstrap((v: TispType) => {
        throw v;
    }),
    'apply': FunctionType.fromBootstrap((func: FunctionType, ...args: TispType[]) => {
        const [last] = args.slice(-1);
        if(!isSeq(last)){
            throw new Error(`Expected list but got ${last}`);
        }
        const argsList = args.slice(0, -1).concat(last.elements);
        return func.func(...argsList);
    }),
    'map': FunctionType.fromBootstrap((func: FunctionType, list: ListType) => {
        if(!isSeq(list)){
            throw new Error(`Expected list but got ${list}`);
        }
        return new ListType(list.elements.map((node) => func.func(node)));
    }),
    'map?': FunctionType.fromBootstrap((node: TispType) => {
        return node.type === Node.HashMap ? True : False;
    }),
    'nil?': FunctionType.fromBootstrap((node: TispType) => {
        return node === Nil ? True : False;
    }),
    'true?': FunctionType.fromBootstrap((node: TispType) => {
        return node === True ? True : False;
    }),
    'false?': FunctionType.fromBootstrap((node: TispType) => {
        return node === False ? True : False;
    }),
    'symbol?': FunctionType.fromBootstrap((node: TispType) => {
        return node.type === Node.Symbol ? True : False;
    }),
    'keyword?': FunctionType.fromBootstrap((node: TispType) => {
        return node.type === Node.Keyword ? True : False;
    }),
    'keyword': FunctionType.fromBootstrap((str: StringType) => {
        return new KeywordType(str.value);
    }),
    keys: FunctionType.fromBootstrap((node: TispType) => {
        if(node.type === Node.HashMap){
            return new ListType( node.keys());
        }
        throw new Error(`Expected hashmap but got ${node}`);
    }),
    'hash-map': FunctionType.fromBootstrap((...args: TispType[]) => {
        return new HashMapType(args);
    }),
    'get': FunctionType.fromBootstrap((node: HashMapType, key: TispType) => {
        return node.get(key);
    }),
    'assoc': FunctionType.fromBootstrap((node: HashMapType, ...args) => {
        return node.assoc(args);
    }),
    'dissoc': FunctionType.fromBootstrap((node: HashMapType, ...args) => {
        return node.dissoc(args);
    }),
    'contains?': FunctionType.fromBootstrap((node: HashMapType, key: TispType) => {
        return node.has(key) ? True : False;
    }),
    'vals': FunctionType.fromBootstrap((node: HashMapType) => {
        return new ListType(node.vals());
    }),
    'symbol': FunctionType.fromBootstrap((str: StringType) => {
        return SymbolType.get(str.value);
    })
}