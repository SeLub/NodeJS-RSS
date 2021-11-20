const { getCipherCode }  = require('./getCipherCode'); 

describe('getCipherCode', () => {

	test('should return cipher code A-C1', () => {

		let input_array = [ '-c', 'A-C1', '-i', 'letter.txt', '-o', 'output.txt' ];

		const resault = getCipherCode(input_array);

  		expect(resault).toEqual('A-C1');

	});

	test('should return cipher code A-C1-R1', () => {

		let input_array = ['node', 'enigma', '--config', 'A-C1-R1'];

		const resault = getCipherCode(input_array);

  		expect(resault).toEqual('A-C1-R1');

	});

	test('should return undefined', () => {

		let input_array = ['node', 'enigma', '--config'];

		const resault = getCipherCode(input_array);

  		expect(resault).toBeUndefined();

	});

	test('should return cipher code -i', () => {

		let input_array = [ '-c', '-i', 'letter.txt', '-o', 'output.txt' ];

		const resault = getCipherCode(input_array);

  		expect(resault).toEqual('-i');

	});

	test('should return undefined', () => {

		let input_array = [ '-i', 'letter.txt', '-o', 'output.txt' ];

		const resault = getCipherCode(input_array);

  		expect(resault).toBeUndefined();

	});

});

