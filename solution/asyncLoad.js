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

module.exports = asyncLoad;
