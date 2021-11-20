let isFileNameClean = (file) => {

    let row_file = file.split('');

    const clean_file_name = row_file.filter(element => !['.','/',''].includes(element)).join();

    return clean_file_name !== '' ? true : false;

} 

module.exports = { isFileNameClean }