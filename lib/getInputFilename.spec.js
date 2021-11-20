const { getInputFilename }  = require('./getInputFilename'); 

const {isValueExistsInArray, isNextValueExistsInArray } = require('./arrayFuctions')

afterEach(() => {
  jest.clearAllMocks();
});


describe("getInputFilename with input -i agruments", () => {

	jest.mock('./arrayFuctions', () => ({
	
	  ...jest.requireActual('./arrayFuctions'),
	
	  isValueExistsInArray: jest.fn(() => () => true),
	
	  isNextValueExistsInArray: jest.fn(() => () => true),
	
	}));


    it("should return filename", () => {

        expect(getInputFilename(['-i', 'test.txt'])).toBe('test.txt');

    });

    jest.mock('./arrayFuctions', () => ({

 	 ...jest.requireActual('./arrayFuctions'),

	  isValueExistsInArray: jest.fn(() => () => false),

 	 isNextValueExistsInArray: jest.fn(() => () => false),

	}));


    it("should return filename", () => {

        expect(getInputFilename(['-i'])).toBe(undefined);

    });
});


describe("getInputFilename with input --input agruments", () => {

	jest.mock('./arrayFuctions', () => ({
	
	  ...jest.requireActual('./arrayFuctions'),
	
	  isValueExistsInArray: jest.fn(() => () => true),
	
	  isNextValueExistsInArray: jest.fn(() => () => true),
	
	}));


    it("should return filename", () => {

        expect(getInputFilename(['--input', 'test.txt'])).toBe('test.txt');

    });

    jest.mock('./arrayFuctions', () => ({

 	 ...jest.requireActual('./arrayFuctions'),

	  isValueExistsInArray: jest.fn(() => () => false),

 	 isNextValueExistsInArray: jest.fn(() => () => false),

	}));


    it("should return filename", () => {

        expect(getInputFilename(['--input'])).toBe(undefined);

    });
});