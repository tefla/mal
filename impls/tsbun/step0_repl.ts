

const READ = (str: string): any => str;
const EVAL = (ast: any, _env?: any): any => ast;
const PRINT = (exp: any): string => exp;
const rep = (str: string): string => PRINT(EVAL(READ(str)));

const repl = async () => {
  const prompt = "user> ";
  process.stdout.write(prompt);
  for await (const line of console) {
    if(line.length === 0) {
      break;
    }
    console.log(rep(line));
    process.stdout.write(prompt);
  }
}
repl();
