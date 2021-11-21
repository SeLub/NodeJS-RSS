const fs = require('fs');
const { checkFileExists } = require('../lib/checkFileExists');
const { ValidationError, pushError, exitError } = require('../lib/errors');

const { readStream } = require('./readStream');


afterEach(() => {
  jest.clearAllMocks();
});

/* 
straem
1) undefined => process.stdin
2) checkFileExists() = true => test.txt
3) checkFileExists() = false => throw Error
4)
*/


describe('readStream', () => {

	test('should return process.stdin ', () => {

		    const realProcess = process;

            const mockExit = jest.fn();

            global.process = { ...realProcess, stdin: 'Success' };


			const resault = readStream(undefined);

    		expect(resault).toBe('Success');

    		global.process = realProcess;
	
	});

		test('should return Error when file does not exists', () => {

		try {

			const resault = readStream('test.txt');

   		} catch (error){

   			 expect(() => readStream('test.txt')).toThrow();
    	
    	}

  	
	});

	test('should return filename', () => {

			const mock = jest.fn('../lib/checkFileExists');
			
			mock.mockReturnValue(true);

		try {

			const resault = readStream('test.txt');
			expect(resault).toBe('test.txt')

   		} catch (error){

   			 expect(() => readStream('test.txt')).toThrow();
    	
    	}

 	
	});



	test('should return Error', () => {

      
        jest.mock('../lib/checkFileExists', () => ({
	
		  ...jest.requireActual('../lib/checkFileExists'),
	
		  checkFileExists: jest.fn(() => { throw new Error('adbd')}),
	
		}));

			const realProcess = process;

            const mockExit = jest.fn(() => () => 1);

            global.process = { ...realProcess, exit: mockExit };


		try {

			const resault = readStream('test.txt');

   		} catch (error){

   			 expect(pushError).toThrow(ValidationError);
    	
    	}
  
  		global.process = realProcess;
	
	});

		test('should should throw error if file does not exists', () => {

		    const realProcess = process;

            const mockExit = jest.fn();

            global.process = { ...realProcess, exit: 199 };

		try {

			const resault = readStream('test.txt');

  		
   		} catch (error){

   			expect(() => readStream('test.txt')).toThrow();
    	
    	}

    		global.process = realProcess;
	
	});

it('should throw errors in readStream', () => {

		jest.mock('fs');

	//	fs.createReadStream = jest.fn().mockReturnThis( {throw new Error()} );
       
    	fs.createReadStream = jest.fn(() => { throw new Error(); }) ;

			const realProcess = process;

            const mockExit = jest.fn(() => () => 1);

            global.process = { ...realProcess, exit: mockExit };

		try {

			const resault = readStream('test.txt');

   		
   		} catch (error){

   			 expect(pushError).toThrow(ValidationError);
    	
    	}
  
  		global.process = realProcess;


});

it('should filename', () => {

		jest.mock('fs');

		fs.createReadStream = jest.fn().mockReturnThis('test');
       
    //	fs.createReadStream = jest.fn(() => { throw new Error(); }) ;

			const realProcess = process;

            const mockExit = jest.fn(() => () => 1);

            global.process = { ...realProcess, exit: mockExit };

		try {

			const resault = readStream('test.txt');

			expect(resault).toBe('test.txt')

   		
   		} catch (error){

   			 expect(pushError).toThrow(ValidationError);
    	
    	}
  
  		global.process = realProcess;


});


});

jest.mock('fs');

describe("Testing mock fs.createReadStream", () => {

	beforeAll(() => { fs.createReadStream.mockClear(); })

	fs.createReadStream.mockReturnValue('test.txt')

    it("fs.createReadStream must have been called", () => {
 
   	    const resault = readStream('test.txt');
 
        expect(fs.createReadStream).toHaveBeenCalledTimes(1);
    });



});

