const fs = require('fs');

const checkFileExists = (file, constants) => {

  let fileExists;

fs.access(file, constants, (err) => {
  
  if (err) {

    console.error(`File ${file} does not exist or does not has right permissions`);

	fileExists = false;
  
  } else {

  	let substr = (constants.toString().includes('R_OK')) ? 'for reading' : (constants.toString().includes('W_OK')) ? 'for writing' : 'has right permissions';

    console.log(`File ${file} exists and has permissions ${substr}`);
	
	fileExists = true;
}});

return fileExists;

}

//checkFileExists('enigma2.js', fs.constants.F_OK | fs.constants.R_OK)

module.exports = { checkFileExists };