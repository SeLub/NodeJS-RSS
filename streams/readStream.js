const fs = require('fs');

const { checkFileExists } = require('../lib/fileExists');

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "\n    ValidationError:";
  }
};

const pushError = (message) => {
  throw new ValidationError(message);
  process.exit(1);
};

const readStream = (stream) => {

try {

	let fromStream = '';

	if (stream === undefined) {

		fromStream = process.stdin;
		console.log('\x1b[32m', `\n    ---------------------------------------------------------------`);
		console.log('\x1b[32m', `\n                 Input stream set to 'process.stdin'`);
		console.log('\x1b[32m', `\n    ---------------------------------------------------------------`);

		return fromStream;

	} else {

		if (checkFileExists(stream, fs.constants.F_OK | fs.constants.R_OK)) {

			let fromStream = fs.createReadStream(stream, {

   				encoding: 'utf8',
    			
    			fd: null,
			
			});

			console.log('\x1b[32m', `\n    ---------------------------------------------------------------`);
			console.log('\x1b[32m', `\n                 Input stream set to ${stream}`);
			console.log('\x1b[32m', `\n    ---------------------------------------------------------------`);

				fromStream.on('error', (error) => {

					fromStream.destroy();

					let message = `\nError in readStream.`;

					pushError(message);
				
					process.exit(9);
  				
  				});

  		return fromStream;

		} else {

			let message = `\n    ---------------------------------------------------------------` +
			`\n    File ${stream} does not exist or does not has right permissions` +
			`\n    ---------------------------------------------------------------`;
			pushError(`    Error to start program :${message}`);

		}
	}

} catch(err) {

    	console.log(err.name);
    	
    	console.log(err.message);

    	process.exit(1);

    	return false;

	};

};

module.exports = { readStream };