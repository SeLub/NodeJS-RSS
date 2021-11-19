
const {
		countInArray,
		filterArray,
		isValueExistsInArray,
		isNextValueExistsInArray
	}  = require('./arrayFuctions'); 

describe('Function countInArray  ', () => {

		let array = [0,1,2,3,1];

	test(`shoud return count number`, async () => {

		value = 1;
    	
    	const resault = countInArray(array, value);

    	expect(resault).toBe(2);
		
		});

	test('countInArray shoud return zero', async () => {

		 value = '2';
    	
    	const resault = countInArray(array, value);

    	expect(resault).toBe(0);
		
		});
	
	test('countInArray shoud return zero', async () => {

		array = [];

		value = 'Have a nice day, friend!';
    	
    	const resault = countInArray(array, value);
		
    	expect(resault).toBe(0);
		});
	
	test('countInArray shoud return zero', async () => {

		array = 'test';

		value = 'Have a nice day, friend!';
    	
    	const resault = countInArray(array, value);
		
    	expect(resault).toBe(0);
		});
	
	test('countInArray shoud return zero', async () => {

		array = null;

		value = 'Have a nice day, friend!';
    	
    	const resault = countInArray(array, value);
		
    	expect(resault).toBe(0);
		});

});

describe('Function isValueExistsInArray  ', () => {

		let array = [0,1,2,3,1];

	test(`shoud return true`, async () => {

		value = 1;
    	
    	const resault = isValueExistsInArray(array, value);

    	expect(resault).toBeTruthy();
		
		});

	test('shoud return false', async () => {

		 value = '2';
    	
    	const resault = isValueExistsInArray(array, value);

    	expect(resault).toBeFalsy();
		
		});
	
	test('shoud return false', async () => {

		array = null;

		value = 'Have a nice day, friend!';
    	
    	const resault = isValueExistsInArray(array, value);
		
    	expect(resault).toBeFalsy();
		});

});


describe('Function filterArray  ', () => {

		let array = ['c','test',2,'-c',-1];

	test(`shoud return array`, async () => {
   	
    	const resault = filterArray(array);

    	expect(resault).toEqual(['-c',-1]);
		
		});
	test(`shoud return []`, async () => {

		array = null;
    	
    	const resault = filterArray(array);

    	expect(resault).toEqual([]);
		
		});
	test(`shoud return 1`, async () => {

		array = ['c','test',2,'-c',-1,'c2'];

		value = 'c';
    	
    	const resault = filterArray(array, value);

    	expect(resault).toEqual(['c','c2']);
		
		});

});

describe('Function isNextValueExistsInArray ', () => {

		let array = ['c','test',2,'-c',-1];

	test(`shoud return true`, async () => {

		value = 'test';
   	
    	const resault = isNextValueExistsInArray(array, value);

    	expect(resault).toBeTruthy();
		
		});
	test(`shoud return false`, async () => {

		value = 'testNoexist';

    	const resault = isNextValueExistsInArray(array, value);

    	expect(resault).toBeFalsy();
		
		});
	test(`shoud return 1`, async () => {

		array = ['c','test',2,'-c',-1,'c2'];

		value = 'c2';
    	
    	const resault = isNextValueExistsInArray(array, value);

    	expect(resault).toBeFalsy();
		
		});

});