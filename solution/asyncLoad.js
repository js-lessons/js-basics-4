function asyncLoad(ids, load, done) {
  var results = Array.apply(null, new Array(ids.length));
  ids.forEach(function (id, num) {
    load(id, function (result) {
      results[num] = result;
      if (results.every(function (x) { return x !== undefined; })){
        done(results);
      }
    });
  });
}

// function asyncLoad2(id1, id2, load, done) {
//   var result = [undefined, undefined];
//   load(id1, function (resource) {
//     result[0] = resource;
//     if (result[1] !== undefined) done(result);
//   });
//   load(id2, function (resource) {
//     result[1] = resource;
//     if (result[0] !== undefined) done(result);
//   });
// }

module.exports = asyncLoad;
