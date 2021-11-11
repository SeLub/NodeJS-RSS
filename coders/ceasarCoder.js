
const codeOfa = 'a'.charCodeAt(0);
const codeOfA = 'A'.charCodeAt(0);

const ceaserCoder = (char, key) => {

      if (/[a-z]/.test(char)) {
        char = String.fromCharCode(
          codeOfa + (((key % 26) + 26 + char.charCodeAt(0) - codeOfa) % 26),
        );
      };

      if (/[A-Z]/.test(char)) {
        char = String.fromCharCode(
          codeOfA + (((key % 26) + 26 + char.charCodeAt(0) - codeOfA) % 26),
        );
      };

      return char;
};

module.exports = {
	ceaserCoder
};