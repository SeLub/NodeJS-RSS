const getCipherCode = (argsArr) => {

	let cipherCodeIndex, customIndex;

	if (argsArr.indexOf('--config') > -1) {

		customIndex = argsArr.indexOf('--config');

		cipherCodeIndex = customIndex + 1;

	} else if (argsArr.indexOf('-c') > -1) {

		customIndex = argsArr.indexOf('-c');

		cipherCodeIndex = customIndex + 1;

	} else { cipherCodeIndex = undefined }

	if (cipherCodeIndex !== undefined) { return argsArr[cipherCodeIndex] }

}

module.exports = { getCipherCode };