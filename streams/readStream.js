const fs = require('fs');
const { checkFileExists } = require('../lib/fileExists');
const { ValidationError, pushError, exitError } = require('../lib/errors');

const readStream = (stream) => {

try {

	let fromStream = '';

	if (stream === undefined) {

		fromStream = process.stdin;

		console.log('\x1b[32m', `\n    ---------------------------------------------------------------`);
		console.log(`\n                 Input stream set to 'process.stdin'`);
		console.log(`\n    ---------------------------------------------------------------`);

		return fromStream;

	} else {

		if (checkFileExists(stream, fs.constants.F_OK | fs.constants.R_OK)) {

			let fromStream = fs.createReadStream(stream, { encoding: 'utf8', fd: null });

			console.log('\x1b[32m', `\n    ---------------------------------------------------------------`);
			console.log(`\n                 Input stream set to ${stream}`);
			console.log(`\n    ---------------------------------------------------------------`);

				fromStream.on('error', (error) => {

					fromStream.destroy();

					let message = `\n    Error in readStream.`;

					pushError(message);
				
  				});

  		return fromStream;

		} else {

			let message = `\n    ---------------------------------------------------------------` +
			`\n    File ${stream} does not exist or does not has right permissions` +
			`\n    ---------------------------------------------------------------`;

			pushError(`    Error to start program :${message}`);

		}
	}

} catch(error) {

		exitError(error)

    	return false;

	};

};

module.exports = { readStream };