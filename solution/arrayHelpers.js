function reduce(array, f, start) {
  // The reduce function applies a function against an accumulator
  // and each value of the array (from left-to-right) has to reduce it to a single value.
  // Here start is initial value of an accumulator. If it wasn't set then first element of the array will
  // be used as initial value, but the array should be iterated from the second element.
  // You can implement map, filter, flatmap, every and some using reduce
var resArray;
 if(array.length===0 && typeof start!= 'undefined'){
   return start;
 }
 if( array.length>0 && typeof start!= 'undefined'){
   array.unshift(start);
 }
 
   resArray=array[0];
 for(var i=1; i<array.length; i++){
   var resArray = f(resArray, array[i]);
 }
 return resArray;
}

function map(array, f) {
  // The map function transforms an array by applying a function to all of its elements
  // and building a new array from the returned values. The new array will have
  // the same length as the input array, but its content will have been "mapped" to a new form by the function.
  var newArray = [];
 for (var i= 0; i<array.length; i++){
   newArray.push(f(array[i]));
}
  return newArray;
}

function filter(array, f) {
  // The filter function creates a new array with all elements
  // that pass the test implemented by the provided function.
  var newArray=[];
 for(var i = 0; i<array.length; i++){
  if(f(array[i])){
    newArray.push(array[i]);
  }
 }
  return newArray;
}

function flatmap(array, f) {
  // Use the reduce method in combination with the concat method to "flatten"
  // an array of arrays into a single array that has all the elements of the input arrays.
  var allArrays = [];
 for (var i= 0; i<array.length; i++){
   allArrays.push(f(array[i]));
 }
  return allArrays.reduce(function(firstArr, secondArr) {
      return firstArr.concat(secondArr);
   });                    
}

function every(array, f) {
  // The every function tests whether all elements in the array pass the test implemented by the provided function.
 for( var i=0; i<array.length; i++){	
    if(!f(array[i])){
      return false;
    }
 }
  return true;
}


function some(array, f) {
  // The some function tests whether some element in the array passes the test implemented by the provided function.
  for( var i=0; i<array.length; i++){	
    if(f(array[i])){
      return true;
    }
 }
 return false;
}


module.exports = {
  map: map,
  reduce: reduce,
  filter: filter,
  flatmap: flatmap,
  every: every,
  some: some
}
