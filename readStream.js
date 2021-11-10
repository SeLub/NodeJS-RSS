const fs = require('fs');

const { checkFileExists } = require('./fileExists');

const readStream = (stream) => {

	let fromStream = '';

	if (stream === undefined) {

		fromStream = process.stdin;

	} else {

		if (checkFileExists(stream, fs.constants.F_OK | fs.constants.R_OK)) {

			let fromStream = fs.createReadStream(stream, {

   				encoding: 'utf8',
    			
    			fd: null,
			
			});

				fromStream.on('error', (error) => {
				
					console.error(`Error! Something has happened with input stream`);
				
					process.exit(1);
  				
  				});

  		return fromStream;

		} else {

			console.log(`File ${stream} does not exist or does not has right permissions`);

			process.exit(1);
		}
	}

};

module.exports = { readStream };