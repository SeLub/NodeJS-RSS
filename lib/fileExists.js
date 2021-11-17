const fs = require('fs');

const checkFileExists = (file, constants) => {

  let fileExists;

  try {
    
    // Split path and filename string to array
    let row_file = file.split('');

    // Remove all . and / from array join to string
    const clean_file_name = row_file.filter(element => !['.','/'].includes(element)).join();
    
    if (fs.accessSync(file, constants) || (clean_file_name !== ''))  {fileExists = true} else  {fileExists = false}; 

    //console.log(`File ${file} exists and has right permissions`);

  } catch (error) {

  	//console.log(`File ${file} does not exist or does not has right permissions`);

    fileExists = false;
  }

return fileExists;

}

//checkFileExists('coders.js', fs.constants.F_OK | fs.constants.R_OK)

module.exports = { checkFileExists };

