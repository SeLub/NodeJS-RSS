const { isFileNameClean }  = require('./isFileNameClean');

describe('isFileNameClean', () => {

    it("return true when value is recognised as file", () => {
    
        expect(isFileNameClean('././test.txt')).toBe(true);
    
        expect(isFileNameClean('./new/test.txt')).toBe(true);

        expect(isFileNameClean('test.txt')).toBe(true);

        expect(isFileNameClean('A')).toBe(true);
    });

    it("return false when value is recognised as path . /", () => {
    
        expect(isFileNameClean('././././')).toBe(false);

        expect(isFileNameClean('./')).toBe(false);

        expect(isFileNameClean('.....')).toBe(false);

        expect(isFileNameClean('////')).toBe(false);

        expect(isFileNameClean('/')).toBe(false);

        expect(isFileNameClean('')).toBe(false);
    
    });

});