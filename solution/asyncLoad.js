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
 //console.log(ids);
 
  var count = 0;
  var users = [];
  ids.forEach(function(id, index) {
    load(id, function(user) {
      users[index] = user;
	  count++;
      if (count === ids.length){
	   return done(users);
	  }
    });
  });
}

module.exports = asyncLoad;
