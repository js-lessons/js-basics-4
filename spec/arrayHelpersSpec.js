var map = require('../solution/arrayHelpers').map,
  reduce = require('../solution/arrayHelpers').reduce,
  filter = require('../solution/arrayHelpers').filter,
  flatmap = require('../solution/arrayHelpers').flatmap,
  every = require('../solution/arrayHelpers').every,
  some = require('../solution/arrayHelpers').some;


describe('arrayHelpers', function() {
  describe('map', function() {
    var square = function(x) { return x * x; }

    it('applies function to every element in provided array', function() {
      expect(map([1, 2, 3], square)).toEqual([1, 4, 9]);
    });

    it('works for empty array', function() {
      expect(map([], square)).toEqual([]);
    });
  });

  describe('reduce', function() {
    var mult = function(a, b) { return a * b; }

    it('folds an array to single value by applying function to current value and accumulator', function() {
      expect(reduce([1, 2, 3, 4], mult, 1)).toEqual(24);
    });

    it('takes a value to start folding from', function() {
      expect(reduce([1, 2], mult, 3)).toEqual(6);
    });

    it('uses first item as a start value if it wasnt provided', function() {
      expect(reduce([1, 2, 3, 4], mult)).toEqual(24);
    });

    it('works for empty array', function() {
      expect(reduce([], mult, 1)).toEqual(1);
      expect(reduce([], mult)).toEqual(undefined);
    });
  });

  describe('filter', function() {
    var odd = function(x) { return x % 2 !== 0; }

    it('returns filtered values by applying filter function to each element of the provided array', function() {
      expect(filter([0, 1, 2, 3], odd)).toEqual([1, 3]);
    });

    it('works for empty array', function() {
      expect(filter([], odd)).toEqual([]);
    });
  });

  describe('flatmap', function() {
    var createDouble = function(x) {
      return [x, x + x];
    }

    it('applies function and flattens resulting array', function() {
      expect(flatmap([0, 1, 2], createDouble)).toEqual([0, 0, 1, 2, 2, 4]);
    });
  });

  describe('every', function() {
    it('returns true if predicate returns true for each value', function() {
      expect(every([NaN, NaN, NaN], isNaN)).toBeTruthy();
    });

    it('returns false if predicate returns false for any value', function() {
      expect(every([NaN, NaN, 4], isNaN)).toBeFalsy();
    });

    it('does not call a predicate if it is not neccessary', function() {
      var test = jasmine.createSpy('predicate').and.returnValue(false);

      every([1, 2, 3], test);

      expect(test).toHaveBeenCalledWith(1);
      expect(test).not.toHaveBeenCalledWith(2);
      expect(test).not.toHaveBeenCalledWith(3);
    });
  });

  describe('some', function() {
    it('returns true if predicate returns true for any value', function() {
      expect(some([NaN, 3, 4], isNaN)).toBeTruthy();
    });

    it('returns false if predicate returns false for each value', function() {
      expect(some([2, 3, 4], isNaN)).toBeFalsy();
    });

    it('does not call a predicate if it is not neccessary', function() {
      var test = jasmine.createSpy('predicate').and.returnValue(true);

      some([1, 2, 3], test);

      expect(test).toHaveBeenCalledWith(1);
      expect(test).not.toHaveBeenCalledWith(2);
      expect(test).not.toHaveBeenCalledWith(3);
    });
  });
});
