
const ceaserCoder = (stringToCode, key, type = true) => {

  let resault_string = '';

for (let character of stringToCode ) {

  resault_string += encoderCeasar(character, key, type); 
  
};

return resault_string;

};


const encoderCeasar = (char, key, type = true) => {

      const codeOfa = 'a'.charCodeAt(0);

      const codeOfA = 'A'.charCodeAt(0);

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

module.exports = { ceaserCoder };