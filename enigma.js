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
	let message1 = '\n      Ceasar Cipher, ROI-8 Ciper and Atbash Cipher Encoder/Decoder\n';
	let message2 = '\n      The program tested under node v16 and may does not work \n      properly with another node versions.               ';
	let message3 = `\n                    Your use node version - ${process.versions.node}`;
	let line =     `\n    ---------------------------------------------------------------`;
	let program_name = `\n            ENIGMA Cipher Program v 2.0 Nov.2021                     `;

	console.log('\x1b[33m%s\x1b[0m', line + program_name + message1 + message2 + message3 + line);


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
	
			if (cipherCode === 'C' && cipherMethod == 1) transformArray.push(transformCeasarStreamEncoding());
			else if (cipherCode === 'C' && cipherMethod == 0) transformArray.push(transformCeasarStreamDecoding());
			else if (cipherCode === 'R' && cipherMethod == 1) transformArray.push(transformROI8StreamEncoding());
			else if (cipherCode === 'R' && cipherMethod == 0) transformArray.push(transformROI8StreamDecoding());
			else if (cipherCode === 'A') transformArray.push(transformAtbashStream());
			else { console.log('Wrong chiper code')}
	
		});
		transformArray.unshift(inputStream);
		transformArray.push(outputStream);


let writeMessage = ''
if (inputFileName === undefined && outputFileName === undefined  ) { writeMessage = '    Please write text for Coding/Decoding...\n' }
else if(inputFileName !== undefined && outputFileName !== undefined) { writeMessage = `    Coding/Decoding for text from ${inputFileName} is completed. Resault in ${outputFileName}`}
	else if(inputFileName !== undefined && outputFileName === undefined) { writeMessage = `    Coding/Decoding for text from ${inputFileName} is completed. Resault:\n`}
		else if (inputFileName === undefined && outputFileName !== undefined ) {writeMessage = `    Please write text for Coding/Decoding. Resault in ${outputFileName}\n` }

console.log('\x1b[33m%s\x1b[0m', `    You use cipher code:`,`\x1b[32m`,` ${getCipherCode(argsArr)}`);
console.log('\x1b[33m%s\x1b[0m', writeMessage, '\x1b[0m');

pipeline(transformArray,
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
      process.exit(1);
    }
  }
);

	};
