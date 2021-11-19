const { getCipherCode }  = require('./getCipherCode'); 

describe('getCipherCode', () => {

	test('should return cipher code A-C1', () => {

		process.argv = ['node', 'enigma', '-c', 'A-C1'];

		const argv = getCipherCode(process.argv);

  		expect(argv).toEqual('A-C1');

	});

	test('should return cipher code A-C1-R1', () => {

		process.argv = ['node', 'enigma', '--config', 'A-C1-R1'];

		const argv = getCipherCode(process.argv);

  		expect(argv).toEqual('A-C1-R1');

	});

	test('should return cipher code A-C1-R1', () => {

		process.argv = ['node', 'enigma'];

		const argv = getCipherCode(process.argv);

  		expect(argv).toBeUndefined();

	});

});

