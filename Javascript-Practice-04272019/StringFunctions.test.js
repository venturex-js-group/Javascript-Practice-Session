const stringFn = require('./StringFunctions');

describe('String inputs', () => {
    it('should capitalize a string', () => {
      expect(stringFn.capitalize("hello")).toBe("Hello");
    });
    it('should return null for a null input', () => {
        expect(stringFn.capitalize(null)).toBeNull()
    });
    it('should return a number as a string', () => {
        expect(stringFn.capitalize(2)).toBe('2')
    });
  });

describe('Input Booleans', () => {
    it('should take a number and return a boolean', () => {
        expect(stringFn.isDivisibleByThree(3)).toBeTruthy()
    })
})