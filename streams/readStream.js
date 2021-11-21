const fs = require('fs');
const { checkFileExists } = require('../lib/checkFileExists');
const { pushError} = require('../lib/errors');

const readStream = (stream) => {

	let fromStream = '';

	if (stream === undefined) {

		fromStream = process.stdin;

		console.log('\x1b[32m', `\n    ---------------------------------------------------------------`);
		console.log(`\n                 Input stream set to 'process.stdin'`);
		console.log(`\n    ---------------------------------------------------------------`);

		return fromStream;

	} else if (checkFileExists(stream, fs.constants.F_OK | fs.constants.R_OK)) {

			let fromStream = fs.createReadStream(stream, { encoding: 'utf8', fd: null });

			console.log('\x1b[32m', `\n    ---------------------------------------------------------------`);
			console.log(`\n                 Input stream set to ${stream}`);
			console.log(`\n    ---------------------------------------------------------------`);


  		return fromStream;

		} else {

			let message = `\n    ---------------------------------------------------------------` +
			`\n    File ${stream} does not exist or does not has right permissions` +
			`\n    ---------------------------------------------------------------\n`;

			pushError(`    Error to start program :${message}`);

		}

};

module.exports = { readStream };