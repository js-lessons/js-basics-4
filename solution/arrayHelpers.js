function reduce(array, f, start) {
  if (!array.length) return start;
  if (typeof start === 'undefined') return reduce(array.slice(1, array.length), f, array[0]);

  var res = start;
  array.forEach( function (item) {
    res = f(res, item);
  });
  return res;
}

function map(array, f) {
  return reduce(array, function (acc, item) {
    return acc.concat([f(item)]);
  }, []);
}

function filter(array, f) {
  return reduce(array, function (acc, item) {
    return f(item) ? acc.concat([item]) : acc;
  }, []);
}

function flatmap(array, f) {
  return reduce(array, function (acc, item) {
    return acc.concat(f(item));
  }, []);
}

function every(array, f) {
  for (var i = 0; i < array.length; ++i) {
    if (!f(array[i])) return false;
  }
  return true;
}

function some(array, f) {
  return !every(array, function (item) { return !f(item); });
}

module.exports = {
  map: map,
  reduce: reduce,
  filter: filter,
  flatmap: flatmap,
  every: every,
  some: some
}
