const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const reverseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].reverse()
const ALPHABET = alphabet.map(el => el = el.toUpperCase());
const reverseALPHABET = reverseAlphabet.map(el => el = el.toUpperCase());
console.log(ALPHABET, reverseALPHABET)

const atbashCoder = (char) => {
      
      if (/[a-z]/.test(char)) {
        const index = alphabet.findIndex(letter => letter === char)
        return reverseAlphabet[index]
        };

      if (/[A-Z]/.test(char)) {
        const index = ALPHABET.findIndex(letter => letter === char)
        return reverseALPHABET[index]
        };
};

module.exports = {
	atbashCoder
};