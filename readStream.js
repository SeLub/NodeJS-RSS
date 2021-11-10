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

readStream('coders.js');