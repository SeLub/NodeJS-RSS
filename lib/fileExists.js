const fs = require('fs');

//const { isFileNameClean } = require('./isFileNameClean')


let checkFileExists = (file, constants) => {

  let flag = true;
  
  try{
    	
    	fs.accessSync(file, constants);
  
  }catch(e){
    	
    	flag = false;
  }
  return flag;
}



module.exports = { checkFileExists };