const { Transform } = require('stream');
let { ceaserCoder } = require('../coders/ceasarCoder');
let { atbashCoder } = require('../coders/atbashCoder');



let logger = function () {
    return new stream.Transform({
        transform: function (chunk, encoding, next) {
            console.log(`Chunk: ${chunk}`);
            this.push(chunk);
            next();
        }
    });
}

let transformCeasarStreamEncoding = function () {
    return new Transform({
    transform(chunk, encoding, callback){
        this.push(ceaserCoder(chunk.toString(), 1, true));
        callback()
    }
})};

let transformCeasarStreamDecoding = function () {
    return new Transform({
    transform(chunk, encoding, callback){
        this.push(ceaserCoder(chunk.toString(), 1, false));
        callback()
    }
})};

let transformROI8StreamEncoding = function () {
    return new Transform({
    transform(chunk, encoding, callback){
        this.push(ceaserCoder(chunk.toString(), 8, true));
        callback()
    }
})};

let transformROI8StreamDecoding = function () {
    return new Transform({
    transform(chunk, encoding, callback){
        this.push(ceaserCoder(chunk.toString(), 8, false));
        callback()
    }
})};

let transformAtbashStream = function () {
    return new Transform({
    transform(chunk, encoding, callback){
        this.push(atbashCoder(chunk.toString()));
        callback()
    }
})};

module.exports = {

	transformCeasarStreamEncoding,
	transformCeasarStreamDecoding,
	transformROI8StreamEncoding,
	transformROI8StreamDecoding,
	transformAtbashStream
};
