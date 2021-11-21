const { ceaserCoder }  = require('./ceasarCoder');

describe('ceaserCoder with capital letters ', () => {

  test(`should encode 'This is secret. Message about "_" symbol!'`, () => {

    let input_string = `This is secret. Message about "_" symbol!`;

    let resault = ceaserCoder(input_string, 1, true)

    expect(resault).toBe(`Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!`)
 
  });

  test('should encode A to B', () => {

    let input_string = 'A';

    let resault = ceaserCoder(input_string, 1, true)

    expect(resault).toBe('B')
 
  });
    
  test('should encode ABC to BCD', () => {

    let input_string = 'ABC';

    let resault = ceaserCoder(input_string, 1, true)

    expect(resault).toBe('BCD')
    
  });

  test('should decode B to A', () => {

    let input_string = 'B';

    let resault = ceaserCoder(input_string, 1, false)

    expect(resault).toBe('A')
    
  });

  test('should decode BCD to ABC', () => {

    let input_string = 'BCD';

    let resault = ceaserCoder(input_string, 1, false)

    expect(resault).toBe('ABC')
    
  });

});

describe('ceaserCoder with small letters ', () => {

  test('should encode a to b', () => {

    let input_string = 'a';

    let resault = ceaserCoder(input_string, 1, true)

    expect(resault).toBe('b')

 
  });
    
  test('should encode abc to bcd', () => {

    let input_string = 'abc';

    let resault = ceaserCoder(input_string, 1, true)

    expect(resault).toBe('bcd')
    
  });

  test('should decode b to a', () => {

    let input_string = 'b';

    let resault = ceaserCoder(input_string, 1, false)

    expect(resault).toBe('a')
    
  });

  test('should decode bcd to abc', () => {

    let input_string = 'bcd';

    let resault = ceaserCoder(input_string, 1, false)

    expect(resault).toBe('abc')
    
  });

});