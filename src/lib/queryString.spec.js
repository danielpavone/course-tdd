const { queryString, parse } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is', () => {
    const obj = {
      name: 'Daniel',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Daniel&profession=developer');
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Daniel',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Daniel&abilities=JS,TDD');
  });

  it('should throw and error when an object is passed as value', () => {
    const obj = {
      name: 'Daniel',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Daniel&profession=developer';

    expect(parse(qs)).toEqual({
      name: 'Daniel',
      profession: 'developer',
    });
  });

  it('should convert a query string of a single key-value pair to object', () => {
    const qs = 'name=Daniel';

    expect(parse(qs)).toEqual({
      name: 'Daniel',
    });
  });

  it('should convert a query string to an object taking care of comma separated values', () => {
    const qs = 'name=Daniel&abilities=JS,TDD';

    expect(parse(qs)).toEqual({
      name: 'Daniel',
      abilities: ['JS', 'TDD'],
    });
  });
});
