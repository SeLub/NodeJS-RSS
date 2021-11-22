const { atbashCoder }  = require('./atbashCoder');

describe('atbashCoder with capital letters ', () => {

  test(`should encode 'This is secret. Message about "_" symbol!'`, () => {

    let input_string = `This is secret. Message about "_" symbol!`;

    let resault = atbashCoder(input_string, 1, true)

    expect(resault).toBe(`Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!`)
 
  });

  test('should encode A to Z', () => {

    let input_string = 'A';

    let resault = atbashCoder(input_string, 1, true)

    expect(resault).toBe('Z')
 
  });
    
  test('should encode ABC to ZYX', () => {

    let input_string = 'ABC';

    let resault = atbashCoder(input_string, 1, true)

    expect(resault).toBe('ZYX')
    
  });

  test('should decode Z to A', () => {

    let input_string = 'Z';

    let resault = atbashCoder(input_string, 1, false)

    expect(resault).toBe('A')
    
  });

  test('should decode ZYX to ABC', () => {

    let input_string = 'ZYX';

    let resault = atbashCoder(input_string, 1, false)

    expect(resault).toBe('ABC')
    
  });

});

describe('atbashCoder with small letters ', () => {

  test('should encode a to z', () => {

    let input_string = 'a';

    let resault = atbashCoder(input_string, 1, true)

    expect(resault).toBe('z')

 
  });
    
  test('should encode abc to zyx', () => {

    let input_string = 'abc';

    let resault = atbashCoder(input_string, 1, true)

    expect(resault).toBe('zyx')
    
  });

  test('should decode z to a', () => {

    let input_string = 'z';

    let resault = atbashCoder(input_string, 1, false)

    expect(resault).toBe('a')
    
  });

  test('should decode zyx to abc', () => {

    let input_string = 'zyx';

    let resault = atbashCoder(input_string, 1, false)

    expect(resault).toBe('abc')
    
  });

});