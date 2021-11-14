const fs = require('fs');

const { checkFileExists } = require('../lib/fileExists');

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError:";
  }
};

const pushError = (message) => {
  throw new ValidationError(message);
  process.exit(1);
};

const readStream = (stream) => {

	let fromStream = '';

	if (stream === undefined) {

		fromStream = process.stdin;
		console.log(`\n---------------------------------------------------------------'`);
		console.log(`\n    Input stream set to 'process.stdin'`);
		console.log(`\n---------------------------------------------------------------'`);

		return fromStream;

	} else {

		if (checkFileExists(stream, fs.constants.F_OK | fs.constants.R_OK)) {

			let fromStream = fs.createReadStream(stream, {

   				encoding: 'utf8',
    			
    			fd: null,
			
			});

			console.log(`\n---------------------------------------------------------------'`);
			console.log(`\n    Input stream set to ${stream}`);
			console.log(`\n---------------------------------------------------------------'`);

				fromStream.on('error', (error) => {
				
					console.error(`Error in readStream`);
				
					process.exit(1);
  				
  				});

  		return fromStream;

		} else {

			let message = `\n    ---------------------------------------------------------------` +
			 `\n    File ${stream} does not exist or does not has right permissions`+
			`\n    ---------------------------------------------------------------`;

			pushError(`\n  Error to start program :${message}`);

			process.exit(1);
		}
	}

};

module.exports = { readStream };