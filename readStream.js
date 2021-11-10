const fs = require('fs');

const { checkFileExists } = require('./fileExists');

const { ceaserCoder } = require('./coders');

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
				fromStream.on('readable', function() {
		  			
		  			let chunk;
  
  					while (null !== (chunk = fromStream.read(1))) {
    
    					console.log(ceaserCoder(chunk,1));
  	
  					}
	
				});

				fromStream.on('end', () => {
  	
  				console.log('Reached end of stream.');
	
				});

		} else {

			console.log('Error in readStream');

			process.exit(1);
		}
	}

};

readStream('coders.js');