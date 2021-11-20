const fs = require('fs');

//const { isFileNameClean } = require('./isFileNameClean')


let checkFileExists = (file, constants) => {
// 
// 	let fileExists = false;
// 
// 	if (isFileNameClean(file)) { fileExists = true};

  if (fs.accessSync(file, constants))  
      
  	 fileExists = true;
        
  else  fileExists = false;


return fileExists;

}

module.exports = { checkFileExists };