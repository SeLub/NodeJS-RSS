const { getCipherCode } = require('./getCipherCode');
const { ValidationError, pushError, exitError } = require('./errors');

let allowed_cipher_names = ['C','R','A'],
	allowed_cipher_methods = [0,1]
	resault_array = [];;

const parseConfig = (param) => {

	let cipherCode = getCipherCode(param);

	try {

		cipherCode.split('-').forEach(chipher_chunk => {

			let cipher_name = chipher_chunk.charAt(0).toString();

			let cipher_method = Number(chipher_chunk.charAt(1) === '' ? 1 : chipher_chunk.charAt(1));

        	if (chipher_chunk.length > 2) { pushError(`\n    Error in cipher code string : \n    chipher code string must be devided by '-',\n      Exemple: -c 'A-C1-R0'\n\n    You enter: ${param}\n    Wrong case: ${chipher_chunk}\n`); }

			else if ( allowed_cipher_methods.includes(cipher_method) && allowed_cipher_names.includes(cipher_name) ) {

				resault_array.push(cipher_name + cipher_method);

			} else {

				pushError(`\n    Error in cipher code 'XY' : \n    X parameter should to be 'C', 'R' or 'A',\n    Y parameter should to be 1 or 0\n\n    You enter: ${param}\n    Wrong case: ${chipher_chunk}\n`);
			}

		});

	} catch(err) {

		exitError(err);

		resault_array = [];
    	
	}
return resault_array;

};

module.exports = { parseConfig };