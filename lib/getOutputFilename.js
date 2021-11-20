const {isValueExistsInArray, isNextValueExistsInArray } = require('./arrayFuctions')

const getOutputFilename = (argsArr) => {

if (isValueExistsInArray(argsArr, '-o') && isNextValueExistsInArray(argsArr, '-o')) 
	
	{ filename = argsArr[argsArr.indexOf('-o') + 1]}

else if(isValueExistsInArray(argsArr, '--output') && isNextValueExistsInArray(argsArr, '--output')) 

	{ filename = argsArr[argsArr.indexOf('--output') + 1]} else {filename = undefined}

return filename;

};

module.exports = { getOutputFilename };