const { ValidationError, pushError, exitError }  = require('./errors'); 

 
describe('pushError', () => {

	test("shoud throw ValidationError", () => {

  		expect(pushError).toThrow(ValidationError);
  
	});


	test('should throw ValidationError with message \'UNKNOWN ERROR\' ', () => {
  
  		try {
      
      		pushError('UNKNOWN ERROR');
  		
  		} catch (error) {
      
      		expect(error.message).toBe('UNKNOWN ERROR');
  		}
	});


	test('should exit with process.exit(1)', () => {

    const realProcess = process;

    const exitMock = jest.fn(() => () => 1);

    global.process = { ...realProcess, exit: exitMock };

      try {

          pushError('test');

          expect(mockExit).toHaveBeenCalled();

          expect(mockExit).toHaveBeenCalledWith(2);

      } catch (error) {

          expect(error.message).toMatch('test');

      }

      global.process = realProcess;

	});

  test('should process.stderr.write = test', () => {
  
    const mockExit3 = jest.spyOn(process.stderr, 'write').mockImplementation(str => str);
    
    try {

      pushError('test');
      
      expect(mockExit3).toHaveBeenCalled();

      expect(mockExit3).toHaveBeenCalledWith('test');

    } catch (error) {

          expect(error.message).toMatch('test');

      }
      
  });


});


describe('exitError', () => {

	test('should exit with process.exit(1)', () => {
  
		const mockExit1 = jest.spyOn(process, 'exit').mockImplementation(() => () => 1);
    
    let error = { message: 'test'}
    
    exitError(error);
  		
		expect(mockExit1).toHaveBeenCalled();

    expect(mockExit1).toHaveBeenCalledWith(1);
  		
	});

  test('should process.stderr.write = test', () => {
  
    const mockExit2 = jest.spyOn(process.stderr, 'write').mockImplementation(str => str);
    
    let error = { message: 'test'}
    
    exitError(error);
      
    expect(mockExit2).toHaveBeenCalled();

    expect(mockExit2).toHaveBeenCalledWith('test');
      
  });


});