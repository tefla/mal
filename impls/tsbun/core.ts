import { pr_str_antlr } from "./printer";
import { FunctionType, NumberType, True, False, Nil, ListType, Node, equals, isSeq, StringType, type TispType, VectorType } from "./types";

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
}