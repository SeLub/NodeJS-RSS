
	// Number: Count of arguments in array 
	const countInArray = (array, value) => array.reduce((n, x) => n + (x === value), 0);

	// Boolen: Is argument present in array
	const isValueExistsInArray = (array, value) => {

	 const customIndex = array.indexOf(value);
	
	 return customIndex > -1 ? true : false;
	
	};

	// Boolen: Is there next argument exists in array?
	const isNextValueExistsInArray = (array, value) => {
	
		const customIndex = array.indexOf(value);

		return array[customIndex + 1] !== undefined ? true : false;

	};

	module.exports = {
		countInArray,
		isValueExistsInArray,
		isNextValueExistsInArray
	};