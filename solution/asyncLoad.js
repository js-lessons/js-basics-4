function asyncLoad(ids, load, done) {
  // asyncLoad takes an array of identifiers, load function and done function.
  //
  // load function knows how to load stuff. It takes an identifier
  // and a callback function which will be called with load result
  //
  // done function should be called only when all work of loading stuff is done.
  // It takes an array of loaded items
  //
  // * loaded items should be the same order as ids
  // * load should be performed in parallel
  var res = ids.reduce(function(map, el){ map[el] = null; return map;}, {});
  ids.forEach(function(id){load(id, function(result){
    res[id] = result;
    if (allLoaded(res)){
      var loaded = ids.map(function(id){ return res[id];});
      done(loaded);
    }
  })});
}

function allLoaded(obj){
  return Object.keys(obj).every(function(prop){ return (obj[prop] !== null)});
}

module.exports = asyncLoad;
