
const codeOfa = 'a'.charCodeAt(0);
const codeOfA = 'A'.charCodeAt(0);

const ceaserCoder = (char, key, type = true) => {

      if (/[a-z]/.test(char)) {

      	let str = type ? codeOfa + (((key % 26) + 26 + char.charCodeAt(0) - codeOfa) % 26) : codeOfa + ((((-key) % 26) + 26 + char.charCodeAt(0) - codeOfa) % 26);

        char = String.fromCharCode(str);
      };

      if (/[A-Z]/.test(char)) {
        
        let str = type ? codeOfA + (((key % 26) + 26 + char.charCodeAt(0) - codeOfA) % 26) : codeOfA + ((((-key) % 26) + 26 + char.charCodeAt(0) - codeOfA) % 26);

        char = String.fromCharCode(str);
      };

      return char;
};

module.exports = {
	ceaserCoder
};