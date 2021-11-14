const { getCipherCode } =require('./getCipherCode')

let encode_method, encode_flag, resault_array = [];

class ValidationError extends Error {

  constructor(message) {

    super(message);

    this.name = "ValidationError";
  }
}

const parseConfig = (param) => {

	let cipherCode = getCipherCode(param);

	try {

		cipherCode.split('-').forEach(el => {
        
        	let normaliseNumber =  Number(el.charAt(1) === '' ? 1 : el.charAt(1));

        	if (el.length > 2) { throw new ValidationError(`\nError in cipher code string : \n  chipher code string must be devided by '-',\n  Exemple: -c 'A-C1-R0'\nYou enter: ${param}\nWrong case: ${el}`); }

			else if ( [0,1].includes(normaliseNumber) && ['C','R','A'].includes(el.charAt(0).toString()) ) {

				encode_method = el.charAt(0).toString().toUpperCase();

				resault_array.push(encode_method + normaliseNumber.toString());

			} else {

				throw new ValidationError(`\nError in config argument '{XY-}n' : \n  X parameter should to be 'C', 'R' or 'A',\n  Y parameter should to be 1 or 0\nYou enter: ${param}`);
			}

		});

	} catch(err) {
    	
    	console.log(err.name);
    	
    	console.log(err.message);
 	
 	// console.log(err.stack);
	}
return resault_array;

};

module.exports = { parseConfig };