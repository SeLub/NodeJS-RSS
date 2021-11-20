const { countInArray, filterArray, isValueExistsInArray } = require('./arrayFuctions');
const { ValidationError, pushError, exitError } = require('./errors');
const { validateArgs } = require('./validateArgs');

let input_array = ['--config', 'A-R1-C0', '-i', 'file.txt', '-o','cipher.txt'];

describe('validateArgs', () => {

	test('should return TRUE i-c or --config presents in args list ', () => {

		input_array = ['--config', 'A-R1-C0', '-i', 'file.txt', '-o','cipher.txt'];

		const resault = validateArgs(input_array);

    	expect(resault).toBe(true);
	
	});

	test('should return TRUE i-c or --config presents in args list ', () => {

		input_array = ['-c', 'A-R1-C0', '-i', 'file.txt', '-o','cipher.txt'];

		const resault = validateArgs(input_array);

    	expect(resault).toBe(true);
	
	});

	test('should return FALSE if only --config presents in args list ', () => {

		input_array = ['--config'];

		    const realProcess = process;

            const mockExit = jest.fn(() => () => 1);

            global.process = { ...realProcess, exit: mockExit };

		try{

			const resault = validateArgs(input_array);

    		expect(resault).toBe(false);
   		
   		} catch (error){

   			 expect(error).toThrow(ValidationError)
    	
    	}

    		global.process = realProcess;
	
	});

	test('should return FALSE if only -c presents in args list ', () => {

		input_array = ['-c'];

			const realProcess = process;

            const mockExit = jest.fn(() => () => 1);

            global.process = { ...realProcess, exit: mockExit };
		
		try{
		
			const resault = validateArgs(input_array);

    		expect(resault).toBe(false);

   		} catch (error){

    		expect(error).toThrow(ValidationError)

    	}

    		global.process = realProcess;
	
	});

	test('should return FALSE if dublicatin arguments -o and -o ', () => {

		input_array = ['-o','file.txt','-o'];

			const realProcess = process;

            const mockExit = jest.fn(() => () => 1);

            global.process = { ...realProcess, exit: mockExit };
		
		try{
		
			const resault = validateArgs(input_array);

    		expect(resault).toBe(false);

   		} catch (error){

   			expect(error).toThrow(ValidationError)
    	
    	}

    		global.process = realProcess;
	
	});

	test('should return FALSE if -o and --config ', () => {

		input_array = ['-c','file.txt','--config'];

			const realProcess = process;

            const mockExit = jest.fn(() => () => 1);

            global.process = { ...realProcess, exit: mockExit };
		
		try{
		
			const resault = validateArgs(input_array);

    		expect(resault).toBe(false);

   		} catch (error){

   			expect(error).toThrow(ValidationError)
    	
    	}

    		global.process = realProcess;
	
	});

	test('should return FALSE if no arguments []', () => {

		input_array = [];

			const realProcess = process;

            const mockExit = jest.fn(() => () => 1);

            global.process = { ...realProcess, exit: mockExit };
		
		try{
		
			const resault = validateArgs(input_array);

    		expect(resault).toBe(false);

   		} catch (error){

   			expect(error).toThrow(ValidationError)
    	
    	}

    		global.process = realProcess;
	
	});

	test('should return FALSE if no arguments []', () => {

		input_array = ['-c','file.txt','--config', '-test'];

			const realProcess = process;

            const mockExit = jest.fn(() => () => 1);

            global.process = { ...realProcess, exit: mockExit };
		
		try{
		
			const resault = validateArgs(input_array);

    		expect(resault).toBe(false);

   		} catch (error){

   			expect(error).toThrow(ValidationError)
    	
    	}

    		global.process = realProcess;
	
	});

test('should return FALSE if no -c or --config in arguments', () => {

		input_array = ['-i','file.txt','--output', 'test.txt'];

			const realProcess = process;

            const mockExit = jest.fn(() => () => 1);

            global.process = { ...realProcess, exit: mockExit };
		
		try{
		
			const resault = validateArgs(input_array);

    		expect(resault).toBe(false);

   		} catch (error){

   			expect(error).toThrow(ValidationError)
    	
    	}

    		global.process = realProcess;
	
	});

test('should return FALSE if no -c or --config in arguments', () => {


		jest.mock('./arrayFuctions', () => ({
	
	  		...jest.requireActual('./arrayFuctions'),
	
	 		 filterArray: jest.fn(() => () => ['-c','-o','-m'])
	
		}));

		input_array = ['-c','A1','-m', '-i','file.txt','--output', 'test.txt'];

			const realProcess = process;

            const mockExit = jest.fn(() => () => 1);

            global.process = { ...realProcess, exit: mockExit };
		
		try{
		
			const resault = validateArgs(input_array);

    		expect(resault).toBe(false);

   		} catch (error){

   			expect(error).toThrow(ValidationError)
    	
    	}

    		global.process = realProcess;
	
	});


});