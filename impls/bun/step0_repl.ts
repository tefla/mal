
const READ = (input: string) => input;

const EVAL = (input: string) => input;
const PRINT = (input: string) => input;

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