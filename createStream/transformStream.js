const { Transform } = require('stream');
let { ceaserCoder } = require('./coders.js')


const transtream = new Transform({
    transform(chunk, encoding, callback){
        this.push(ceaserCoder(chunk.toString(), 1));
        callback()
    }
});

process.stdin.pipe(transtream).pipe(process.stdout);