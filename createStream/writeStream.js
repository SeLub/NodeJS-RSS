const fs = require('fs');

const { checkFileExists } = require('./fileExists');

const writeStream = (stream) => {

	let toStream = '';

	if (stream === undefined) {

		toStream = process.stdout;

	} else {

		if (checkFileExists(stream, fs.constants.F_OK | fs.constants.W_OK)) {

			let toStream = fs.createWriteStream(stream, { flags: 'a' });


				toStream.on('error', (error) => {
				
					console.error(`Error in writeStream!`);
				
					process.exit(1);
  				
  				});

  		return toStream;

		} else {

			console.log(`File ${stream} does not exist or does not has right permissions`);

			process.exit(1);

		}
	}

};

module.exports = { writeStream };