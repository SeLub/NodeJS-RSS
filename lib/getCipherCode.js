const getCipherCode = (argsArr) => {

	customIndex = process.argv.indexOf('--config');

	cipherCodeIndex = customIndex > -1 ? customIndex + 1 : undefined;

	if (cipherCodeIndex === undefined) {

		customIndex = process.argv.indexOf('-c');

		cipherCodeIndex = customIndex + 1;
	}

	return process.argv[cipherCodeIndex];

}

module.exports = { getCipherCode };