
	// Number: Count of arguments in array 
	const countInArray = (array, value) => Array.isArray(array) ? array.reduce((n, x) => n + (x === value), 0) : 0;

	// Boolen: Is argument present in array
	const isValueExistsInArray = (array, value) => countInArray(array, value) !== 0 ? true : false;


	const filterArray = (array, value = '-', index = 0) =>  Array.isArray(array) ? array.filter( element  => element.toString().charAt(index) === value) : [];

	// Boolen: Is there next argument exists in array?
	const isNextValueExistsInArray = (array, value) => {

		if (Array.isArray(array) && array.indexOf(value) !== -1) {
			
			return array[array.indexOf(value) + 1] !== undefined ? true : false;

		} else { return false; } 

	};

	module.exports = {
		countInArray,
		filterArray,
		isValueExistsInArray,
		isNextValueExistsInArray
	};