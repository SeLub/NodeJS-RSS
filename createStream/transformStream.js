const { Transform } = require('stream');
let { ceaserCoder } = require('../coders/ceasarCoder')


const transformCeasarStreamEncoding = new Transform({
    transform(chunk, encoding, callback){
        this.push(ceaserCoder(chunk.toString(), 1, true));
        callback()
    }
});

const transformCeasarStreamDecoding = new Transform({
    transform(chunk, encoding, callback){
        this.push(ceaserCoder(chunk.toString(), 1, false));
        callback()
    }
});

const

process.stdin.pipe(transformCeasarStreamEncoding).pipe(transformCeasarStreamDecoding).pipe(process.stdout);