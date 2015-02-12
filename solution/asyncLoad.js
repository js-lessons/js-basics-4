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

    var loadingState = [];
    var loadingItem = [];
    ids.forEach(function (id, index) {
//        console.log(id);
        loadingState[index] = false;
        load(id, function (elem) {
//            console.log(id);
            loadingState[index] = true;
            loadingItem[id] = elem;

            for (var i = 0; i < loadingState.length; i += 1) {
                if (!loadingState[i]) {
                    return;
                }
            }
//            loadingItem.sort(function(a,b){return loadingItem[a].id - loadingItem[b].id});
            done(loadingItem);
        });
    });
}

module.exports = asyncLoad;
