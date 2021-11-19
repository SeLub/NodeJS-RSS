const { countInArray, filterArray, isValueExistsInArray, isNextValueExistsInArray } = require('./arrayFuctions');
const { ValidationError, pushError, exitError } = require('./errors');
argsArrInput = ['--config', 'A-R1-C0', '-i', 'file.txt', '-o','cipher.txt'];

const validateArgs = (argsArrInput) => {
  
  // List of allowed arguments
  let allowedArguments = ['-c','-i','-o','--config','--input','--output'];

  //----------------------------------------------------
  //--- Get only options with "-" or "--" from arguments
  //----------------------------------------------------
//  let options_array = argsArrInput.filter( arg  => arg.charAt(0) === '-');

  let options_array = filterArray(argsArrInput);
  
  //----------------------------------------------------
  //--- Validate options
  //----------------------------------------------------
  try {
  
      // To start program you have to pass any arguments
      if (options_array.length === 0) 
        
        pushError(`\n    Error to start program :\n    no arguments to start program\n    Exemple: -c OR --config 'A-C1-R0'\n`);
      
      options_array.forEach(arg => {
        
        // Only allowed arguments must be in arguments list
        if (!allowedArguments.includes(arg)) 
          
          pushError(`\n    Error to start program :\n    not allowed arguments,\n    allowed arguments: ${allowedArguments}\n\n    You enter: ${arg}\n`);
        
        // No dublication of arguments allowed in arguments list
        else if (countInArray(options_array, arg) > 1)
            
          pushError(`\n    Error to start program :\n    dublication in arguments,\n    found dublication argument: ${arg}\n`);
        });
        
      //// Arguments -c and --config must to be in arguments list 
      if (!isValueExistsInArray(options_array, '-c') && !isValueExistsInArray(options_array, '--config'))

        pushError(`\n    Error to start program :\n    arguments -c or --config are mendatary\n    Exemple: -c OR --config 'A-C1-R0'\n\n    You enter: ${options_array}\n`);
      
      // Only -c OR only --config must present in arguments list 
      if (isValueExistsInArray(options_array, '-c') && isValueExistsInArray(options_array, '--config'))

        pushError(`\n    Error to start program :\n    use only -c or only --config argument\n    Exemple: -c 'A-C1-R0' OR --config 'A-C1-R0'\n\n    You enter: ${options_array}\n`);
      
      // if only -c argument present in arguments list, without next chipher code 
      if (isValueExistsInArray(argsArrInput, '-c') && argsArrInput.length === 1)

        pushError(`\n    Error to start program :\n    use -c with next cipher code argument\n    Exemple: -c 'A-C1-R0'\n\n    You enter: ${argsArrInput}\n`);
      
      
      // if only --config argument present in arguments list, without next chipher code 
      if (isValueExistsInArray(argsArrInput, '--config') && argsArrInput.length === 1)

        pushError(`\n    Error to start program :\n    use --config with next cipher code argument\n    Exemple: --config 'A-C1-R0'\n\n    You enter: ${argsArrInput}\n`);
      
      return true;
  
  	} catch(error) {
      	
        exitError(error);
 
      	return false;
  
  	};
  
};

module.exports = { validateArgs };