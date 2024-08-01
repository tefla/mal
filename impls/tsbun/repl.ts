
const repl = require( 'node:repl')


export const customRepl = () => {
    repl.start({
        prompt: 'tisp> ',
        eval: (cmd, context, filename, callback) => {
            console.log(cmd);     
        }
    });
                
}

customRepl()