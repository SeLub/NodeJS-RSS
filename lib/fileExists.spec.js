const fs = require('fs');

const { checkFileExists }  = require('./fileExists');


describe('checkFileExists', () => {

	test('should return TRUE if file exists', () => {

		jest.mock('fs');
    
    	fs.accessSync = jest.fn(() => {}) ;

		fs.accessSync.mockReturnValue(true);

		const resault = checkFileExists('tets.txt', fs.constants.F_OK | fs.constants.R_OK);

    	expect(resault).toBe(true);
	
	});
    
	test('should return FALSE if file does not exists', () => {

		jest.mock('fs');
    
    	fs.accessSync = jest.fn(() => {}) ;

		fs.accessSync.mockReturnValue(false);

		const resault = checkFileExists('tets.txt', fs.constants.F_OK | fs.constants.R_OK);

    	expect(resault).toBe(false);
    
	});



});