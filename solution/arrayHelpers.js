function reduce(array, f, start) {
  if (start == undefined) {
    start = array[0];
    count = 1;
  } else { count = 0; }
  for (i = count; i < array.length; i++) {
    start = f(array[i], start);
  }
  return start;
}

// function map(array, f) {
//   acc = [];
//   for (i = 0; i < array.length; i++) {
//     acc = acc.concat([f(array[i])]);
//   }
//   return acc;
// }

// function filter(array, f) {
//   acc = [];
//   for (i = 0; i < array.length; i++) {
//     if (f(array[i]) {
//       acc = acc.push(f(array[i]));
//     }
//   }
//   return acc;
// }

// function flatmap(array, f) {
//   acc = []
//   for (i = 0; i < array.length; i++) {
//     acc = acc.concat(f(array[i]));
//     }
//   return acc;
// }

function map(array, f) {
  return reduce(array, function(acc, x) {
    return acc.concat([f(x)]);
  }, []);
}

function filter(array, f) {
  return reduce(array, function(acc, x) {
    return f(x) ? acc.concat([x]) : acc;
  }, []);
}


function flatmap(array, f) {
  return reduce(array, function(acc, x) {
    return acc.concat(f(x));
  }, []);
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
