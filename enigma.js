const { pipeline } = require('stream');

const { getCipherCode } = require('./lib/getCipherCode');
const { validateArgs } = require('./lib/validateArgs');
const { parseConfig } = require('./lib/parseConfig');

const { getInputFilename } = require('./lib/getInputFilename');
const { getOutputFilename } = require('./lib/getOutputFilename');

const { readStream } = require('./streams/readStream');
const { writeStream } = require('./streams/writeStream');

const {

	transformCeasarStreamEncoding,
	transformCeasarStreamDecoding,
	transformROI8StreamEncoding,
	transformROI8StreamDecoding,
	transformAtbashStream

} = require('./streams/transformStream');

let argsArr = process.argv.slice(2);

if (validateArgs(argsArr)) {

	let inputFileName = getInputFilename(argsArr);

	let outputFileName = getOutputFilename(argsArr);

	let inputStream = readStream(inputFileName);

    let outputStream = writeStream(outputFileName);

    let parsedChiperArray = parseConfig(argsArr);

    //console.log('parsedChiperArray', parsedChiperArray);

	let transformArray = [];

		parsedChiperArray.forEach(el =>{
	
			let cipherCode = el.slice(0, 1);
			let cipherMethod = el.slice(1, 2);
	
			if (cipherCode === 'C' && cipherMethod == 1) transformArray.push(transformCeasarStreamEncoding);
			else if (cipherCode === 'C' && cipherMethod == 0) transformArray.push(transformCeasarStreamDecoding);
			else if (cipherCode === 'R' && cipherMethod == 1) transformArray.push(transformROI8StreamEncoding);
			else if (cipherCode === 'R' && cipherMethod == 0) transformArray.push(transformROI8StreamDecoding);
			else if (cipherCode === 'A') transformArray.push(transformAtbashStream);
			else { console.log('Wrong chiper code')}
	
		});
		transformArray.unshift(inputStream);
		transformArray.push(outputStream);
//console.log ('transformArray =', transformArray);

pipeline(transformArray,
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
      process.exit(1);
    }
  }
);

	};
