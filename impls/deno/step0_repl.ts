
import * as readline from 'node:readline';

import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const READ = (str: string): any => str;
const EVAL = (input: any) => input;
const PRINT = (input: any) => input;
const rep = (str: string): string => PRINT(EVAL(READ(str)));

rl.setPrompt('user> ');
rl.prompt()
rl.on('line', (line) => {
    if (line.length === 0) {
        rl.close();
    }
    try {
        console.log(rep(line));
    } catch (e) {
        console.log(e);
    }
    rl.prompt();
}).on('close', () => {
    process.exit(0);
});