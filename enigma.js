//const { isArgsValid } = require('./lib/validateArgs');
//const { getCipherCode } = require('./lib/getCipherCode');
const { validateArgs } = require('./lib/validateArgs');
//const { parseConfig } = require('./lib/parseConfig

const { getInputFilename } = require('./lib/getInputFilename');
const { getOutputFilename } = require('./lib/getOutputFilename');
const { countInArray, isValueExistsInArray, isNextValueExistsInArray } = require('./lib/arrayFuctions')

const { readStream } = require('./streams/readStream');
const { writeStream } = require('./streams/writeStream');

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

let argsArr = process.argv.slice(2);


// if (validateArgs(argsArr)) {

	let validatedArgs = validateArgs(argsArr);

	let inputFileName = getInputFilename(argsArr);

	let outputFileName = getOutputFilename(argsArr);

	let inputStream = readStream(inputFileName);

    let outputStream = writeStream();


//	console.log(getCipherCode(argsArr))
	
//	// console.log(parseConfig(getCipherCode(argsArr)));
//
//	let parsedChiperArray = parseConfig(getCipherCode(argsArr));
//
//	//console.log(parsedChiperArray)
//
//	//parsedChiperArray.forEach(el => {el.length > 2 ? console.log('el > 2 ', el) : false})
//	
//	let transformArray = [];
//
//	parsedChiperArray.forEach(el =>{
//
//		//console.log(el, ' ',el.slice(0, 1), ' ', el.slice(1,2));
//
//		let cipherCode = el.slice(0, 1);
//		let cipherMethod = el.slice(1, 2);
//
//		if (cipherCode === 'C' && cipherMethod == 1) transformArray.push('transformCeasarStreamEncoding');
//		else if (cipherCode === 'C' && cipherMethod == 0) transformArray.push('transformCeasarStreamDecoding');
//		else if (cipherCode === 'R' && cipherMethod == 1) transformArray.push('transformROI8StreamEncoding');
//		else if (cipherCode === 'R' && cipherMethod == 0) transformArray.push('transformROI8StreamDecoding');
//		else if (cipherCode === 'A') transformArray.push('transformAtbashStream');
//		else { console.log('Wrong chiper code')}
//
//	});
//
//console.log(transformArray);

//}

