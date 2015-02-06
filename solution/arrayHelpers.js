function reduce(array, f, start) {
  // The reduce function applies a function against an accumulator
  // and each value of the array (from left-to-right) has to reduce it to a single value.
  // Here start is initial value of an accumulator. If it wasn't set then first element of the array will
  // be used as initial value, but the array should be iterated from the second element.
  // You can implement map, filter, flatmap, every and some using reduce
  var reducedValue, startFrom;
  if (!start) {
    reducedValue = array[0];
    startFrom = 1;
  } else {
    reducedValue=start;
    startFrom=0;
  }
  for (var i=startFrom; i<array.length; i++) {
       reducedValue = f(reducedValue, array[i]);
    }
  return reducedValue;
}

function map(array, f) {
  // The map function transforms an array by applying a function to all of its elements
  // and building a new array from the returned values. The new array will have
  // the same length as the input array, but its content will have been "mapped" to a new form by the function.
  mappedArray = [];
  for (var i=0; i<array.length; i++) {
    mappedArray.push(f(array[i]));
  }
  return mappedArray;
}

function filter(array, f) {
  // The filter function creates a new array with all elements
  // that pass the test implemented by the provided function.
  var filteredArray = [];
  for (var i=0; i<array.length; i++) {
    if (f(array[i])) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

function flatmap(array, f) {
  // Use the reduce method in combination with the concat method to "flatten"
  // an array of arrays into a single array that has all the elements of the input arrays.
  var changedArray = [];
  for (var i=0; i<array.length; i++) {
    changedArray.push(f(array[i]));
  }
  return reduce(changedArray, function(a,b) {
    return a.concat(b);
  }, 0);
}

function every(array, f) {
  // The every function tests whether all elements in the array pass the test implemented by the provided function.
  var i=0, count=0; 
  while (i<array.length&&f(array[i])) {
    i++;
    count++;
  }
  return (count===array.length) ? true : false;
}

function some(array, f) {
  // The some function tests whether some element in the array passes the test implemented by the provided function.
  result = false;
  for (i=0; i<array.length; i++) {
    if(f(array[i])) {
      result=true;
      break;
    }
  }
  return result;
}

module.exports = {
  map: map,
  reduce: reduce,
  filter: filter,
  flatmap: flatmap,
  every: every,
  some: some
}
