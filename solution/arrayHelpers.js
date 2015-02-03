function reduce(array, f, start) {
  // The reduce function applies a function against an accumulator
  // and each value of the array (from left-to-right) has to reduce it to a single value.
  // Here start is initial value of an accumulator. If it wasn't set then first element of the array will
  // be used as initial value, but the array should be iterated from the second element.
  // You can implement map, filter, flatmap, every and some using reduce
  var result = (undefined !== start) ? start : array[0];
  for (var i = (undefined !== start) ? 0 : 1; i < array.length; i++){
    result = f(result, array[i]);
  }
  return result;
}

function map(array, f) {
  // The map function transforms an array by applying a function to all of its elements
  // and building a new array from the returned values. The new array will have
  // the same length as the input array, but its content will have been "mapped" to a new form by the function.
  var map = function(arr, el){ arr.push(f(el)); return arr;};	  
  return reduce(array, map, []);
}

function filter(array, f) {
  // The filter function creates a new array with all elements
  // that pass the test implemented by the provided function.
  var filter = function(arr, el){ if (f(el)) arr.push(el); return arr;};
  return reduce(array, filter, []);
}

function flatmap(array, f) {
  // Use the reduce method in combination with the concat method to "flatten"
  // an array of arrays into a single array that has all the elements of the input arrays.
  var flatmap = function(arr, el){ return arr.concat(f(el));};
  return reduce(array, flatmap, []);
}
function every(array, f) {
  // The every function tests whether all elements in the array pass the test implemented by the provided function.
  var every = function(result, el){ return result && f(el);};  
  return reduce(array, every, true);
}

function some(array, f) {
  // The some function tests whether some element in the array passes the test implemented by the provided function.
  var some = function(result, el){ return result || f(el);};
  return reduce(array, some, false);
}

module.exports = {
  map: map,
  reduce: reduce,
  filter: filter,
  flatmap: flatmap,
  every: every,
  some: some
}
