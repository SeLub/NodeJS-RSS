const fs = require('fs');
const { checkFileExists } = require('../lib/checkFileExists');
const { ValidationError, pushError, exitError } = require('../lib/errors');

const { writeStream } = require('./writeStream');


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


describe('writeStream', () => {

	test('should return process.stdin ', () => {

		    const realProcess = process;

            const mockExit = jest.fn();

            global.process = { ...realProcess, stdout: 'Success' };


			const resault = writeStream(undefined);

    		expect(resault).toBe('Success');

    		global.process = realProcess;
	
	});


	test('should return Error when file does not exists', () => {

		try {

			const resault = writeStream('test.txt');

   		} catch (error){

   			 expect(() => writeStream('test.txt')).toThrow();
   			 expect(() => writeStream('test.txt')).toThrow(ValidationError);
    	
    	}

  	
	});

		test('should return filename', () => {

			const mock = jest.fn('../lib/checkFileExists');
			
			mock.mockReturnValue(true);

		try {

			const resault = writeStream('test.txt');
			expect(resault).toBe('test.txt')

   		} catch (error){

   			 expect(() => writeStream('test.txt')).toThrow();
    	
    	}

  	
	});

});

jest.mock('fs');

describe("Testing mock fs.createWriteStream", () => {

	beforeAll(() => { fs.createWriteStream.mockClear(); })

	fs.createWriteStream.mockReturnValue('test.txt')

    it("fs.createWriteStream must have been called", () => {
 
   	    const resault = writeStream('test.txt');
 
        expect(fs.createWriteStream).toHaveBeenCalledTimes(1);
    });



});