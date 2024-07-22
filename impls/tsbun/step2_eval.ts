import { read_str, read_str_antlr } from "./reader.ts";
import { pr_str, pr_str_antlr } from "./printer.ts";
import {Env} from "./env.ts";

const rootEnv = new Env();
rootEnv.set("+", (a : number, b : number) => a + b);
rootEnv.set("-", (a : number, b : number) => a - b);
rootEnv.set("*", (a : number, b : number) => a * b);
rootEnv.set("/", (a : number, b : number) => a / b);

const eval_ast = (ast: any, env: any): any => {
  return ast.eval(env);
}
const READ = (str: string): any => read_str_antlr(str);
const EVAL = (ast: any, _env?: any): any => eval_ast(ast, _env);
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

