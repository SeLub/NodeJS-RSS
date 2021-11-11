let encode_method, encode_flag, resault_array = [];

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

const parseConfig = (param) => {

	try {

		param.split('-').forEach(el => {
        
        	let normaliseNumber =  Number(el.charAt(1) === '' ? 1 : el.charAt(1));

			if ( [0,1].includes(normaliseNumber) && ['C','R','A'].includes(el.charAt(0).toString().toUpperCase()) ) {

				encode_method = el.charAt(0).toString().toUpperCase();

				resault_array.push(encode_method + normaliseNumber.toString());

			} else {

				throw new ValidationError(`Error in -c --config '{XY(-)}n' : \n
				
											X parameter should to be 'C', 'R' or 'A',\n
					
											Y parameter should to be 1 or 0\n`);
			}

		});

	} catch(err) {
    	
    	console.log(err.name);
    	
    	console.log(err.message);
 	
 	// console.log(err.stack);
	}
return resault_array;

};

module.exports = {

parseConfig

};