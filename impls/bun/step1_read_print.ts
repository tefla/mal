import {parse} from "./reader.ts";

const READ = (input: string) => parse(input);

const EVAL = (input: any) => input;
const PRINT = (input: any) => input;

const prompt = "user> ";

const rep = (input: string) => PRINT(EVAL(READ(input)))

const repl = async () => {
    console.write(prompt);
    for await (const line of console) {
        console.log(rep(line));
        console.write(prompt);
    }
}
repl()