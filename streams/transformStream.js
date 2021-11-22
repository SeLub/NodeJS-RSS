const { Transform } = require('stream');
const { ceaserCoder } = require('../coders/ceasarCoder');
const { atbashCoder } = require('../coders/atbashCoder');

exports.transformCeasarStreamEncoding = function () {
    return new Transform({
    transform(chunk, encoding, callback){
        this.push(ceaserCoder(chunk.toString(), 1, true));
        callback()
    }
})};

exports.transformCeasarStreamDecoding = function () {
    return new Transform({
    transform(chunk, encoding, callback){
        this.push(ceaserCoder(chunk.toString(), 1, false));
        callback()
    }
})};

exports.transformROI8StreamEncoding = function () {
    return new Transform({
    transform(chunk, encoding, callback){
        this.push(ceaserCoder(chunk.toString(), 8, true));
        callback()
    }
})};

exports.transformROI8StreamDecoding = function () {
    return new Transform({
    transform(chunk, encoding, callback){
        this.push(ceaserCoder(chunk.toString(), 8, false));
        callback()
    }
})};

exports.transformAtbashStream = function () {
    return new Transform({
    transform(chunk, encoding, callback){
        this.push(atbashCoder(chunk.toString()));
        callback()
    }
})};