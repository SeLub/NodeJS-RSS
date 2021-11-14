const { countInArray, isValueExistsInArray, isNextValueExistsInArray } = require('./arrayFuctions')
//argsArrInput = ['--config', 'A-R1-C0', '-i', 'file.txt', '-o','cipher.txt'];

const validateArgs = (argsArrInput) => {

// ---Custom Errors

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
//----------------------------------------------------
//--- Clean arguments array from user data
//----------------------------------------------------
let argsArr = [];

argsArrInput.forEach(el => {

	if (el.charAt(0) === '-') argsArr.push(el);

	});

//----------------------------------------------------

// List of allowed arguments
let allowedArguments = ['-c','-i','-o','--config','--input','--output'];

try {

// To start program you have to pass arguments list
if (argsArr.length === 0) 
  pushError(`\n  Error to start program :\n    no arguments to start program\n    Exemple: -c OR --config 'A-C1-R0'\n`);

argsArr.forEach(el => {

// Only allowed arguments must be in arguments list
if (!allowedArguments.includes(el)) 
  pushError(`\n  Error to start program :\n    not allowed arguments,\n    allowed arguments: ${allowedArguments}\nYou enter: ${el}`);

// No dublication of arguments allowed in arguments list
else if (countInArray(argsArr, el) > 1)
   pushError(`\n  Error to start program :\n    dublication in arguments,\n    found dublication argument: ${el}`);
});

//// Arguments -c and --config must to be in arguments list 
if (!isValueExistsInArray(argsArr, '-c') && !isValueExistsInArray(argsArr, '--config')) 
  pushError(`\n  Error to start program :\n    arguments -c or --config are mendatary\n    Exemple: -c OR --config 'A-C1-R0'\n`);

// Only -c OR only --config must present in arguments list 
if (isValueExistsInArray(argsArr, '-c') && isValueExistsInArray(argsArr, '--config'))
  pushError(`\n  Error to start program :\n    use only -c or only --config argument\n    Exemple: -c 'A-C1-R0' OR --config 'A-C1-R0'\n`);

return true;

	} catch(err) {
    	
    	console.log(err.name);
    	
    	console.log(err.message);

    	return false;

	};

};

module.exports = { validateArgs };