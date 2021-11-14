const { Transform } = require('stream');
let { ceaserCoder } = require('../coders/ceasarCoder');
let { atbashCoder } = require('../coders/atbashCoder');


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

const transformROI8StreamEncoding = new Transform({
    transform(chunk, encoding, callback){
        this.push(ceaserCoder(chunk.toString(), 8, true));
        callback()
    }
});

const transformROI8StreamDecoding = new Transform({
    transform(chunk, encoding, callback){
        this.push(ceaserCoder(chunk.toString(), 8, false));
        callback()
    }
});

const transformAtbashStream = new Transform({
    transform(chunk, encoding, callback){
        this.push(atbashCoder(chunk.toString()));
        callback()
    }
});

module.exports = {

	transformCeasarStreamEncoding,
	transformCeasarStreamDecoding,
	transformROI8StreamEncoding,
	transformROI8StreamDecoding,
	transformAtbashStream
};
