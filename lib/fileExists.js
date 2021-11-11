const fs = require('fs');

const checkFileExists = (file, constants) => {

  let fileExists;

  try {
    
    fs.accessSync(file, constants);

    console.log(`File ${file} exists and has right permissions`);

    fileExists = true;

  } catch (error) {

  	console.log(`File ${file} does not exist or does not has right permissions`);

    fileExists = false;
  }

return fileExists;

}

//checkFileExists('coders.js', fs.constants.F_OK | fs.constants.R_OK)

module.exports = { checkFileExists };