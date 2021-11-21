const fs = require('fs');

const { checkFileExists }  = require('./checkFileExists');


describe('checkFileExists', () => {

	beforeEach( () => {

		jest.resetModules();

	});


	test('should return TRUE if file exists', () => {

		jest.mock('fs');
    
    	fs.accessSync = jest.fn(() => () => true) ;

		//fs.accessSync.mockReturnValue(true);

		const resault = checkFileExists('tets.txt', fs.constants.F_OK | fs.constants.R_OK);

    	expect(resault).toBe(true);
	
	});
    
	test('should return FALSE if file does not exists', () => {

		jest.mock('fs');
    
    	fs.accessSync = jest.fn(() => () => false) ;

		const resault = checkFileExists('tets.txt', fs.constants.F_OK | fs.constants.R_OK);

    	expect(resault).toBe(true);
    
	});

		test('should throw error if fs.accessSync fails', () => {

		jest.mock('fs');
    
    	fs.accessSync = jest.fn(() => { throw Error }) ;

    	try{

			const resault = checkFileExists('tets.txt', fs.constants.F_OK | fs.constants.R_OK)

   		} catch (error){

   			 expect(() => checkFileExists('tets.txt', fs.constants.F_OK | fs.constants.R_OK)).toThrow();
    	}
    
	});

});