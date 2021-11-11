const rot8Coder = (char, type = true) =>      {
        
        if (!char.match(/[A-Za-z]/)) return char;
        
        c = Math.floor(char.charCodeAt(0) / 97);
        
        type ? k = (char.toLowerCase().charCodeAt(0) - 96) % 26 + 13 : k = (char.toLowerCase().charCodeAt(0) - 96) % 26 - 13;
        
        return String.fromCharCode(k + ((c == 0) ? 64 : 96));
     }

module.exports = {

	rot8Coder
};