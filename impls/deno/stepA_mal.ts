import { readStr } from "./reader.ts";
import { pr_str_antlr } from "./printer.ts";
import { Env } from "./env.ts";
import { FunctionType, VectorType, type TispType, Node, ListType, isSeq, NumberType, True, False, equals, Nil, StringType, SymbolType, HashMapType } from "./types.ts";
import { ns } from "./core.ts";
import { parseArgs } from "@std/cli/parse-args";
import * as readline from 'node:readline';
import { readFileSync, appendFileSync} from 'node:fs';
import { stdin as input, stdout as output } from 'node:process';

let history: string[] = [];
try {
  history = readFileSync(".history", { encoding: "utf8" }).split("\n")

} catch(e) {
 // console.log(e);
}
const rl = readline.createInterface({ input, output, history });


export function isMacroCall(ast: TispType, env: Env) {
  if (ast.type !== Node.List) {
    return false;
  }
  const [first, ...rest] = ast.elements;
  if (first.type !== Node.Symbol) {
    return false;
  }
  const value = env.get(first.value);
  return value && value.type === Node.Function && (value as FunctionType).is_macro;
}

function macroexpand(ast: TispType, env: Env): TispType {
  while (isMacroCall(ast, env)) {
    if (ast.type !== Node.List) {
      throw new Error(`Expected list but got ${ast}`);
    }
    const [first, ...rest] = ast.elements;
    if (first.type !== Node.Symbol) {
      throw new Error(`Expected symbol but got ${first}`);
    }
    const value = env.get(first.value);
    if (!value) {
      throw new Error(`${first.value} not found`);
    }
    if (value.type !== Node.Function) {
      throw new Error(`Expected function but got ${value}`);
    }
    const fn = value as FunctionType;
    ast = fn.func(...rest);
  }
  return ast;
}
function starts_with(lst: TispType[], sym: string): boolean {
  if (lst.length == 2) {
    let a0 = lst[0]
    switch (a0.type) {
      case Node.Symbol:
        return a0.value === sym;
    }
  }
  return false;
}

function qq_loop(elt: TispType, acc: ListType): ListType {
  if (elt.type == Node.List && starts_with(elt.elements, "splice-unquote")) {
    return new ListType([SymbolType.get("concat"), elt.elements[1], acc]);
  } else {
    return new ListType([SymbolType.get("cons"), quasiquote(elt), acc]);
  }
}

function qq_foldr(xs: TispType[]): ListType {
  let acc = new ListType([])
  for (let i = xs.length - 1; 0 <= i; i -= 1) {
    acc = qq_loop(xs[i], acc)
  }
  return acc;
}

function quasiquote(ast: TispType): TispType {
  switch (ast.type) {
    case Node.Symbol:
      return new ListType([SymbolType.get("quote"), ast]);
    case Node.HashMap:
      return new ListType([SymbolType.get("quote"), ast]);
    case Node.List:
      if (starts_with(ast.elements, "unquote")) {
        return ast.elements[1];
      } else {
        return qq_foldr(ast.elements);
      }
    case Node.Vector:
      return new ListType([SymbolType.get("vec"), qq_foldr(ast.elements)]);
    default:
      return ast;
  }
}

const eval_ast = (ast: TispType, env: Env): TispType => {
  switch (ast.type) {
    case Node.Symbol:
      const value = env.get(ast.value);
      if (!value) {
        throw new Error(`${ast.toString()} not found`)
      }
      return value;
    case Node.List:
      return new ListType(ast.elements.map(node => eval_mal(node, env)));
    case Node.Vector:
      return new VectorType(ast.elements.map(node => eval_mal(node, env)));
    case Node.HashMap:
      const list: TispType[] = [];
      for (const [key, value] of ast.entries()) {
        list.push(key);
        list.push(eval_mal(value, env));
      }
      return new HashMapType(list);
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

    ast = macroexpand(ast, env);
    if (!isSeq(ast)) {
      return eval_ast(ast, env);
    }
    if (ast.elements.length < 1) {
      return ast;
    }

    // Check if special form
    const [firstParam, ...rest] = ast.elements
    switch (firstParam.type) {
      case Node.Symbol:
        switch (firstParam.value) {
          case 'def!': {
            const [key, value] = rest;
            if (key.type !== Node.Symbol) {
              throw new Error(`Expected ident but got ${key}`);
            }
            if (!value) {
              throw new Error(`Expected value but got ${value}`);
            }
            const evalValue = eval_mal(value, env);
            env.set(key.value, evalValue);
            return evalValue;
          }
          case 'let*': {
            const [bindings, body] = rest;
            if (!isSeq(bindings)) {
              throw new Error(`Expected vector but got ${bindings}`);
            }
            env = new Env(env);
            for (let i = 0; i < bindings.elements.length; i += 2) {
              if (bindings.elements[i].type !== Node.Symbol) {
                throw new Error(`Expected ident but got ${bindings.elements[i]}`);
              }
              env.set(bindings.elements[i].value, eval_mal(bindings.elements[i + 1], env));
            }
            ast = body;
            continue loop;
          }
          case 'do': {
            if (rest.length < 1) {
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
            return FunctionType.fromAst(eval_mal, env, params.elements.map(e => {
              if(e.type !== Node.Symbol) {
                throw new Error(`Expected symbol but got ${e}`);
              }
              return e.value;
            }), body);
          }
          case 'quote': {
            if (rest.length !== 1) {
              throw new Error(`quote expects 1 argument, got ${rest.length}`);
            }
            return rest[0];
          }
          case 'quasiquote': {
            if (rest.length !== 1) {
              throw new Error(`quasiquote expects 1 argument, got ${rest.length}`);
            }
            ast = quasiquote(rest[0]);
            continue loop;
          }
          case 'quasiquoteexpand': {
            return quasiquote(rest[0]);
          }
          case 'defmacro!': {
            const [key, value] = rest;
            if (key.type !== Node.Symbol) {
              throw new Error(`Expected ident but got ${key}`);
            }
            const evalValue = eval_mal(value, env);

            env.set(key.value, evalValue.toMacro());
            return evalValue;
          }
          case 'macroexpand': {
            return macroexpand(rest[0], env);
          }
          case 'try*': {
            const [tryBody, catchNode] = rest;
            try {
              return eval_mal(tryBody, env);
            } catch (e) {
              if (catchNode && catchNode.type === Node.List) {
                const [catchSym, err, catchBody] = catchNode.elements;
                if (catchSym.value !== "catch*") {
                  throw new Error(`Expected catch but got ${catchSym}`);
                }
                if (err.type !== Node.Symbol) {
                  throw new Error(`Expected symbol but got ${err}`);
                }
                return eval_mal(catchBody, new Env(env, [err.value], [e]));
              }
              return e;
            }
          }
          case '___': {
            console.log(env)
            return Nil
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
    if (fn.body) {
      ast = fn.body;
      env = fn.newEnv(args);
      continue loop;
    }
    return fn.func(...args);
  }

}
const READ = (str: string): any => readStr(str);
const EVAL = (ast: any, _env?: any): any => eval_mal(ast, _env);
const PRINT = (exp: any): string => pr_str_antlr(exp)
const rep = (str: string): string => PRINT(EVAL(READ(str), rootEnv));



rl.setPrompt('user> ');

const repl = () => {
  rl.prompt()
  rl.on('line', async (line) => {
    if (line.length === 0) {
      rl.close();
    }
    appendFileSync(".history", line + "\n", { encoding: "utf8" });
    try {
      console.log(rep(line));
    } catch (e) {
      console.log("Error", PRINT(e));
    }
    rl.prompt();
  }).on('close', () => {
    process.exit(0);
  });


}

const rootEnv = new Env();
Object.entries(ns).map(([key, value]) => {
  rootEnv.set(key, value);
})
rootEnv.set("eval", FunctionType.fromBootstrap((ast: TispType) => {
  if (!ast) {
    throw new Error("Cannot eval nil");
  }
  const res = eval_mal(ast, rootEnv);

  return res;
}));

rep('(def! not (fn* (a) (if a false true)))')
// load-file
rep(`(def! load-file (fn* (f) (eval (read-string (str "(do " (slurp f) "\nnil)")))))`)
rep(`(defmacro! cond (fn* (& xs) (if (> (count xs) 0) (list 'if (first xs) (if (> (count xs) 1) (nth xs 1) (throw "odd number of forms to cond")) (cons 'cond (rest (rest xs)))))))`)
rep(`(defmacro! id (fn* (x) x))`)
rep('(def! x {:a 1 :b 2})')
rep('(try* xyz)')
rep('(def! *host-language* "Deno")')
const args = parseArgs(
  Deno.args,

)

// const [_, __, ...args] = positionals;

if (args._.length > 0) {
  // Read the file
  const [filename, ...rest] = args._;
  rootEnv.set("*ARGV*", new ListType(rest.map(a => new StringType(a))));
  rep(`(load-file "${filename}")`);
} else {
  rootEnv.set("*ARGV*", new ListType([]));
  // Add eval to rootEnv
  repl();

}

