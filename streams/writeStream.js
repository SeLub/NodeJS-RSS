const fs = require('fs');
const { checkFileExists } = require('../lib/checkFileExists');
const { pushError} = require('../lib/errors');

const writeStream = (stream) => {

	let toStream = '';

	if (stream === undefined) {

		toStream = process.stdout;

		console.log('\x1b[36m', `\n    ---------------------------------------------------------------`);		
		console.log(`\n                 Output stream set to 'process.stdout'`);
		console.log(`\n    ---------------------------------------------------------------`);

		return toStream;

	} else if (checkFileExists(stream, fs.constants.F_OK | fs.constants.W_OK)) {

			let toStream = fs.createWriteStream(stream, { flags: 'a' });

			console.log('\x1b[36m', `\n    ---------------------------------------------------------------'`);
			console.log(`\n                 Output stream set to ${stream}`);
			console.log(`\n    ---------------------------------------------------------------'`);

  		return toStream;

	} else {

			let message = `\n    ---------------------------------------------------------------` +
			`\n    File ${stream} does not exist or does not has right permissions` +
			`\n    ---------------------------------------------------------------`;

			pushError(`    Error to start program :${message}`);

	};

};

module.exports = { writeStream };