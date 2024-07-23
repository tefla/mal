import { read_str_antlr } from "./reader.ts";
import { pr_str_antlr } from "./printer.ts";
import { Env } from "./env.ts";
import { FunctionType, VectorType, type TispType, Node, ListType, isSeq, NumberType, True, False, equals, Nil } from "./types.ts";
import { AstNode, AtomNode } from "./AST.ts";
import { first } from "lodash/fp";
import { ns } from "./core.ts";

const rootEnv = new Env();
Object.entries(ns).map(([key, value]) => {
  rootEnv.set(key, value);
})


const eval_ast = (ast: TispType, env: Env): TispType => {
  switch (ast.type) {
    case Node.Program:
      return ast.elements.map(node => eval_mal(node, env)).pop();
    case Node.Ident:
      const value = env.get(ast.value);
      if (!value) {
        throw new Error(`${ast.value} not found `)
      }
      return value;
    case Node.List:
      return new ListType(ast.elements.map(node => eval_mal(node, env)));
    case Node.Vector:
      return new VectorType(ast.elements.map(node => eval_mal(node, env)));

    default:
      return ast;
  }
}

const eval_mal = (ast: TispType, env: Env): any => {
  loop:
  while (true) {
  if (ast.type !== Node.List) {
    return eval_ast(ast, env);
  }
  if (ast.elements.length < 1) {
    return ast;
  }
  // Check if special form
  const [firstParam, ...rest] = ast.elements
  switch (firstParam.type) {
    case Node.Ident:
      switch (firstParam.value) {
        case 'def!': {
          const [key, value] = rest;
          if(key.type !== Node.Ident){
            throw new Error(`Expected ident but got ${key}`);
          }
          const evalValue = eval_mal(value, env);
          env.set(key.value, evalValue);
          return evalValue;
        }
        case 'let*': {
          const [bindings, body] = rest;
          if(!isSeq(bindings)){
            throw new Error(`Expected vector but got ${bindings}`);
          }
          env = new Env(env);
          for (let i = 0; i < bindings.elements.length; i += 2) {
            if(bindings.elements[i].type !== Node.Ident){
              throw new Error(`Expected ident but got ${bindings.elements[i]}`);
            }
            env.set(bindings.elements[i].value, eval_mal(bindings.elements[i + 1], env));
          }
          ast = eval_mal(body, env);
          continue loop;
        }
        case 'do': {
          if(rest.length < 1){
            return Nil;
          }
          const lastElement = rest.pop()!;
          rest.map(node => eval_mal(node, env));
          ast = lastElement;
          continue loop;
        }
        case 'if': {
          const [condition, trueBranch, falseBranch] = rest
          const evalCondition = eval_mal(condition, env);
          if (!equals(evalCondition, False) && !equals(evalCondition, Nil)) {
            ast = trueBranch;
          } else {
            if (!falseBranch) {
              ast = Nil;
            } else {
            ast = falseBranch;
            }
          }
          continue loop;
        }
        case 'fn*': {
          const [params, body] = rest;
          if (!isSeq(params)) {
            throw new Error(`Expected vector but got ${params}`);
          }
          return FunctionType.fromAst(eval_mal, env, params.elements.map(a => a.toString()), body);
        }
      }
  }
  // ...


  // otherwise Evaluate the function
  const result = eval_ast(ast, env);
  if (!isSeq(result)) {
    throw new Error(`Not a function ${result}`);
  }
  const [fn, ...args] = result.elements
  if (fn.type !== Node.Function) {
    throw new Error(`Not a function ${fn}`);
  }
  if(fn.body){
    ast = fn.body;
    env = fn.newEnv(args);
    continue loop;
  }
  return fn.func(...args);
  }
}
const READ = (str: string): any => read_str_antlr(str);
const EVAL = (ast: any, _env?: any): any => eval_mal(ast, _env);
const PRINT = (exp: any): string => pr_str_antlr(exp)
const rep = (str: string): string => PRINT(EVAL(READ(str), rootEnv));

const repl = async () => {
  const prompt = "user> ";
  process.stdout.write(prompt);
  for await (const line of console) {
    if (line.length === 0) {
      break;
    }
    try {
      process.stdout.write(rep(line));
      process.stdout.write("\n");
    } catch (e) {
      const err: Error = e;
      process.stdout.write(err.message);
      process.stdout.write("\n");
    }
    process.stdout.write(prompt);
  }
}
rep('(def! not (fn* (a) (if a false true)))')
repl();
//console.log(rep(`(println "\\"")`))