var repeat = require('../solution/trampoline').repeat,
  trampoline = require('../solution/trampoline').trampoline,
  factorial = require('../solution/trampoline').factorial
  isEven = require('../solution/trampoline').isEven;

describe('trampoline usage', function() {
  describe('factorial', function() {
    it('returns 1 if number is 0', function() {
      expect(factorial(0)).toEqual(1);
    });

    it('returns 1 if number is 1', function() {
      expect(factorial(1)).toEqual(1);
    });

    it('returns 24 if number is 4', function() {
      expect(factorial(4)).toEqual(24);
    });
  });

  describe('repeat', function() {
    var operation;

    beforeEach(function() {
      operation = jasmine.createSpy();
    });

    it('works', function() {
      var count = 0;
      repeat(function() { count++ }, 100);
      expect(count).toEqual(100);
    });

    it('repeats operation provided number of times', function() {
      var num = 100000;

      repeat(operation, num);
      expect(operation.calls.length).toEqual(num);
    });
  });

  describe("isEven", function() {
    it('works with even numbers', function() {
      expect(isEven(0)).toBeTruthy();
      expect(isEven(2)).toBeTruthy;
      expect(isEven(42)).toBeTruthy();
    });

    it('works with odd numbers', function() {
      expect(isEven(1)).toBeFalsy();
      expect(isEven(3)).toBeFalsy();
      expect(isEven(21)).toBeFalsy();
    });

    it('works for negative numbers', function() {
      expect(isEven(-21)).toBeFalsy();
      expect(isEven(-42)).toBeTruthy();
    });

    it('works with large numbers', function() {
      expect(isEven(121330)).toBeTruthy();
      expect(isEven(121331)).toBeFalsy();
    });
  });
});
