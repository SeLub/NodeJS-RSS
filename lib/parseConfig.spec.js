const { parseConfig } = require('./parseConfig');
const { getCipherCode } = require('./getCipherCode');
const { ValidationError, pushError, exitError }  = require('./errors'); 

afterEach(() => { jest.clearAllMocks(); });

//jest.mock('./getCipherCode', () => () => undefined);

let input_array = [ '-c', 'A-C1', '-i', 'letter.txt', '-o', 'output.txt' ];

describe("getCipherCode", () => {

    it("should return array with elements 'A1' and C1", () => {

        input_array = [ '-c', 'A-C1', '-i', 'letter.txt', '-o', 'output.txt' ];

        let resault = parseConfig(input_array)

        expect(resault).toContain('A1');

        expect(resault).toContain('C1');

    });

    it("should return array with elements 'A1' and C1", () => {

        input_array = [ '--config', 'A-C1', '-i', 'letter.txt', '-o', 'output.txt' ];

        let resault = parseConfig(input_array)

        expect(resault).toContain('A1');

        expect(resault).toContain('C1');

    });

    it("should return array with elements 'A1' and C1", () => {

        input_array = [ '--config', 'A-C1', '-i', 'letter.txt', '-o', 'output.txt' ];

        let resault = parseConfig(input_array)

        expect(resault).toContain('A1');

        expect(resault).toContain('C1');

    });

    it("should toThrow Error when length of argwment >2", () => {

        input_array = [ '--config', 'AC1', '-i', 'letter.txt', '-o', 'output.txt' ];

            const realProcess = process;

            const mockExit = jest.fn(() => () => 1);

            global.process = { ...realProcess, exit: mockExit };

        try {

          let resault = parseConfig(input_array)

        } catch(error) {

          expect(error).toThrow(ValidationError)

        }

    });

    it("should toThrow Error when wrong cipher code as argwment", () => {

        input_array = [ '--config', 'M1', '-i', 'letter.txt', '-o', 'output.txt' ];

            const realProcess = process;

            const mockExit = jest.fn(() => () => 1);

            global.process = { ...realProcess, exit: mockExit };

        try {

          let resault = parseConfig(input_array)

        } catch(error) {

          expect(error).toThrow(ValidationError)

        }

    });

    it("should toThrow Error when wrong cipher code as argwment", () => {

        input_array = [ '--config', 'C2', '-i', 'letter.txt', '-o', 'output.txt' ];

            const realProcess = process;

            const mockExit = jest.fn(() => () => 1);

            global.process = { ...realProcess, exit: mockExit };

        try {

          let resault = parseConfig(input_array)

        } catch(error) {

          expect(error).toThrow(ValidationError)

        }

    });

    it("should toThrow Error when wrong cipher code as argwment", () => {

        input_array = [];

            const realProcess = process;

            const mockExit = jest.fn(() => () => 1);

            global.process = { ...realProcess, exit: mockExit };

        try {

          let resault = parseConfig(input_array)

        } catch(error) {

          expect(error).toThrow(ValidationError)

        }

    });


});