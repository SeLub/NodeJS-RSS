const rot8Coder = (char, key = 8, type = true) =>      {
        
        if (!char.match(/[A-Za-z]/)) return char;
        
        c = Math.floor(char.charCodeAt(0) / 97);
        
        type ? k = (char.toLowerCase().charCodeAt(0) - 96) % 26 + key : k = (char.toLowerCase().charCodeAt(0) - 96) % 26 - key;
        
        return String.fromCharCode(k + ((c == 0) ? 64 : 96));
     }

console.log(rot8Coder('I',8,false))

module.exports = {

	rot8Coder
};