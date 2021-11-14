const {isValueExistsInArray, isNextValueExistsInArray } = require('./arrayFuctions')

const getInputFilename = (argsArr) => {

if (isValueExistsInArray(argsArr, '-i') && isNextValueExistsInArray(argsArr, '-i')) 
	{ filename = argsArr[argsArr.indexOf('-i') + 1]}

else if(isValueExistsInArray(argsArr, '--input') && isNextValueExistsInArray(argsArr, '--input')) 
	{ filename = argsArr[argsArr.indexOf('--input') + 1]} else { filename = undefined }

return filename;

};

module.exports = { getInputFilename };