const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const reverseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].reverse()
const ALPHABET = alphabet.map(el => el = el.toUpperCase());
const reverseALPHABET = reverseAlphabet.map(el => el = el.toUpperCase());



const atbashCoder = (stringToCode) => {

  let resault_string = '';

for (let character of stringToCode ) {

  resault_string += encoderAtbash(character); 
  
};

return resault_string;

};

const encoderAtbash = (char) => {
      
        if (/[a-z]/.test(char)) {
        
        const index = alphabet.findIndex(letter => letter === char)
        return reverseAlphabet[index]
        
        } else if (/[A-Z]/.test(char)) {
        
        const index = ALPHABET.findIndex(letter => letter === char)
        return reverseALPHABET[index]
        
        } else {

        	return char;
        };
};

module.exports = {
	atbashCoder
};