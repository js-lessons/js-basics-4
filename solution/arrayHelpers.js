function reduce(array, f, start) {
  if (start == undefined) {
    start = array[0];
    count = 1;
  } else { count = 0; }
  for (i = count; i < array.length; i++) {
    start = f(start, array[i]);
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
//     if (f(array[i])) {
//       acc = acc.concat([array[i]]);
//     }
//   }
//   return acc;
// }

// function flatmap(array, f) {
//   acc = [];
//   for (i = 0; i < array.length; i++) {
//     acc = acc.concat(f(array[i]));
//     }
//   return acc;
// }

// function some(array, f) {
//   return !every(array, function(x) { return !f(x); });
// }

// function every(array, f) {
//   return !some(array, function(x) { return !f(x); });
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
  for (i = 0; i < array.length; i++) {
    if (!f(array[i])) {
      return false;
    }
  }
  return true;
}

function some(array, f) {
  for (i = 0; i < array.length; i++) {
    if (f(array[i])) {
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
