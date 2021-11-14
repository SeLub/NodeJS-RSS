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

const writeStream = (stream) => {

	let toStream = '';

	if (stream === undefined) {

		toStream = process.stdout;
		console.log(`\n---------------------------------------------------------------`);		
		console.log(`\n    Output stream set to 'process.stdout'`);
		console.log(`\n---------------------------------------------------------------`);
	} else {

		if (checkFileExists(stream, fs.constants.F_OK | fs.constants.W_OK)) {

			let toStream = fs.createWriteStream(stream, { flags: 'a' });

			console.log(`\n---------------------------------------------------------------'`);
			console.log(`\n    Output stream set to ${stream}`);
			console.log(`\n---------------------------------------------------------------'`);


				toStream.on('error', (error) => {
				
					console.error(`Error in writeStream!`);
				
					process.exit(1);
  				
  				});

  		return toStream;

		} else {

			let message = `\n    ---------------------------------------------------------------`+
			+`\n    File ${stream} does not exist or does not has right permissions`+
			+`\n    ---------------------------------------------------------------`;

			pushError(`\n  Error to start program :${message}`);

			process.exit(1);

		}
	}

};

module.exports = { writeStream };