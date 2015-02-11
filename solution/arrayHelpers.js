function reduce(array, f, start) {
  if(typeof start=== 'undefined'){start = array[0]}
  for (var i = start; i < array.length; i++){
    result = f(result, array[i]);
  }
}

function map(array, f) {
  ar.forEach(
    function(element, index){
        ar[index] = element*3;
    }
  );
  return ar;    
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
