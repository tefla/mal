import {  read_str_antlr } from "./reader.ts";
import { pr_str_antlr } from "./printer.ts";
import {Env} from "./env.ts";
import { FunctionType, VectorType, type TispType, Node, ListType, isSeq, NumberType } from "./types.ts";
import { AstNode, AtomNode } from "./AST.ts";
import { first } from "lodash/fp";

const rootEnv = new Env();
rootEnv.set("+", FunctionType.fromBootstrap((a : NumberType, b : NumberType) => new NumberType(a.value + b.value)));
rootEnv.set("-", FunctionType.fromBootstrap((a : NumberType, b : NumberType) => new NumberType(a.value - b.value)));
rootEnv.set("*", FunctionType.fromBootstrap((a : NumberType, b : NumberType) => new NumberType(a.value * b.value)));
rootEnv.set("/", FunctionType.fromBootstrap((a : NumberType, b : NumberType) => new NumberType(a.value / b.value)));


const eval_ast = (ast: TispType, env: Env): TispType => {
  switch(ast.type){
    case Node.Program:
      return ast.elements.map(node => eval_mal(node, env)).pop();
    case Node.Ident:
      const value = env.get(ast.value);
      if(!value){
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
  if(ast.type !== Node.List){
    return eval_ast(ast, env);
  }
  if(ast.elements.length < 1){
    return ast;
  }
  // Check if special form
  const [firstParam, ...rest] = ast.elements
  switch(firstParam.type){
    case Node.Ident:
      switch(firstParam.value){
        case 'def!':
          const [key, value] = rest;
          const evalValue = eval_mal(value, env);
          env.set(key.value, evalValue);
          return evalValue;
        case 'let*':
          const [bindings, body] = rest;
          const letEnv = new Env(env);
          for(let i = 0; i < bindings.elements.length; i+=2){
            letEnv.set(bindings.elements[i].value, eval_mal(bindings.elements[i+1], letEnv));
          }
          return eval_mal(body, letEnv);
      }
  }
  // ...


  // otherwise Evaluate the function
  const result = eval_ast(ast, env);
  if(!isSeq(result)){
    throw new Error(`Not a function ${result}`);
  }
  const [fn, ...args] = result.elements
  if(fn.type !== Node.Function){
    throw new Error(`Not a function ${fn}`);
  }
  return fn.func(...args);
  
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
repl();

//console.log(rep("(let* [c 2 b 3 d (* c b)] (* d d))")) // 6


