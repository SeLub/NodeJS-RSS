const { getOutputFilename }  = require('./getOutputFilename'); 

const {isValueExistsInArray, isNextValueExistsInArray } = require('./arrayFuctions')

afterEach(() => {
  jest.clearAllMocks();
});


describe("getOutputFilename with input -o agruments", () => {

	jest.mock('./arrayFuctions', () => ({
	
	  ...jest.requireActual('./arrayFuctions'),
	
	  isValueExistsInArray: jest.fn(() => () => true),
	
	  isNextValueExistsInArray: jest.fn(() => () => true),
	
	}));


    it("should return filename", () => {

        expect(getOutputFilename(['-o', 'test.txt'])).toBe('test.txt');

    });

    jest.mock('./arrayFuctions', () => ({

 	 ...jest.requireActual('./arrayFuctions'),

	  isValueExistsInArray: jest.fn(() => () => false),

 	 isNextValueExistsInArray: jest.fn(() => () => false),

	}));


    it("should return filename", () => {

        expect(getOutputFilename(['-o'])).toBe(undefined);

    });
});


describe("getOutputFilename with input --output agruments", () => {

	jest.mock('./arrayFuctions', () => ({
	
	  ...jest.requireActual('./arrayFuctions'),
	
	  isValueExistsInArray: jest.fn(() => () => true),
	
	  isNextValueExistsInArray: jest.fn(() => () => true),
	
	}));


    it("should return filename", () => {

        expect(getOutputFilename(['--output', 'test.txt'])).toBe('test.txt');

    });

    jest.mock('./arrayFuctions', () => ({

 	 ...jest.requireActual('./arrayFuctions'),

	  isValueExistsInArray: jest.fn(() => () => false),

 	 isNextValueExistsInArray: jest.fn(() => () => false),

	}));


    it("should return filename", () => {

        expect(getOutputFilename(['--output'])).toBe(undefined);

    });
});