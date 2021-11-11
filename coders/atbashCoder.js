const atbashCoder = (char) => {    

    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var tebahpla = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
    var alphabet1 = "abcdefghijklmnopqrstuvwxyz";
    var tebahpla1 = "zyxwvutsrqponmlkjihgfedcba";
    var decoded_string = "";

    for (var i = 0; i < char.length; i++) {
        var coded_letra = char.charAt(i);
        
	if (/[^a-zA-Z]/.test(char[i])) {
		decoded_string = decoded_string+char[i];	
	}
	else if (char[i] === char[i].toUpperCase()) {
	    	var letraPosMayus = alphabet.indexOf(coded_letra);
	    	var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
	    	decoded_string = decoded_string+tebLetraPosMayus;
        } else {
	    	var letraPosMinus1 = alphabet1.indexOf(coded_letra);
	    	var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
	    	decoded_string = decoded_string + tebLetraPosMinus1;
        }

    }
    return decoded_string;
}

module.exports = {
	atbashCoder
};

console.log(atbashCoder('A'));