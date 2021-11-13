class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
};

const isArgsValid = (argsArr) => {

const countInArray = (array, value) => {

  	return array.reduce((n, x) => n + (x === value), 0);

};

const isArgExist = (arg) => {
 
 const customIndex = process.argv.indexOf(arg);

 return customIndex > -1 ? true : false;

};

const moreThanOnceArg = (arg) => {

	return isArgExist('-c') && countInArray(argsArr, '-c') > 2 ? true : false;
};

const isNextArgExist = (arg) => {

	const customIndex = process.argv.indexOf(arg);

	return process.argv[customIndex + 1] ? true : false;
};

try {

		if (process.argv.length === 2) {
	
			throw new ValidationError(`\n  Error to start program :\n    parametrs -c or --config are mendatary\n    Exemple: -c OR --config 'A-C1-R0'\n`);
	 	  	process.exit(1);
			
		} else if (isArgExist('-c') && isArgExist('--config')) {
	
			throw new ValidationError(`\n  Error to start program :\n    use only -c or only --config parametr\n    Exemple: -c 'A-C1-R0' OR --config 'A-C1-R0'\n`);
	 	  	process.exit(1);
	
		} else if (moreThanOnceArg('-c') || moreThanOnceArg('--config')) {
	
			throw new ValidationError(`\n  Error to start program :\n    use -c or --config only once\n    Exemple: -c 'A-R0' -c 'R0' cause Error\n`);
	 	  	process.exit(1);
	
		} else {
	
			return true;
		};

	} catch(err) {
    	
    	console.log(err.name);
    	
    	console.log(err.message);

    	return false;
 	
	};

};

module.exports = { isArgsValid };