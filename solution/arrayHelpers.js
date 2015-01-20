function reduce(array, f, start) {
  // The reduce function applies a function against an accumulator
  // and each value of the array (from left-to-right) has to reduce it to a single value.
  // You can implement map, filter, flatmap, every and some using reduce
}

function map(array, f) {
  // The map function transforms an array by applying a function to all of its elements
  // and building a new array from the returned values. The new array will have
  // the same length as the input array, but its content will have been "mapped" to a new form by the function.
}

function filter(array, f) {
  // The filter function creates a new array with all elements
  // that pass the test implemented by the provided function.
}

function flatmap(array, f) {
  // Use the reduce method in combination with the concat method to "flatten"
  // an array of arrays into a single array that has all the elements of the input arrays.
}

function every(array, f) {
  // The every function tests whether all elements in the array pass the test implemented by the provided function.
}

function some(array, f) {
  // The some function tests whether some element in the array passes the test implemented by the provided function.
}

module.exports = {
  map: map,
  reduce: reduce,
  filter: filter,
  flatmap: flatmap,
  every: every,
  some: some
}
