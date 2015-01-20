var asyncLoad = require('../solution/asyncLoad');

describe('asyncLoad', function() {
  var userLoadTime = 1000,

  users = [
    { id: 0, name: 'Oluwafemi Enu' },
    { id: 1, name: 'Kgosi Ekene' },
    { id: 2, name: 'Olufemi Berhanu' },
    { id: 3, name: 'Farai Wasswa' },
    { id: 4, name: 'Eseoghene Chima' },
    { id: 5, name: 'Limbani Sefu' },
    { id: 6, name: 'Tiyamike Itumeleng' },
    { id: 7, name: 'Umukoro Oghenekaro' },
    { id: 8, name: 'Rudo Dalitso' },
    { id: 9, name: 'Chioma Olufemi' },
    { id: 10, name: 'Ekwueme Okoro' }
  ],

  userIds = users.map(function(u) { return u.id });

  it('takes load and done functions and calls done with an array of loaded items', function(done) {
    var load = function(id, fn) {
      // Emulate users async load
      // Load each user within userLoadTime (1 second)

      setTimeout(function() {
        var match = users.filter(function(user) { return user.id === id });
        match.length ? fn(match[0]) : fn(null);
      }, Math.floor(Math.random() * userLoadTime));
    },

    allLoaded = function(loadedUsers) {
      // Define all users loaded callback function
      // which takes loaded users array

      expect(loadedUsers).toEqual(users);
      done();
    };

    asyncLoad(userIds, load, allLoaded);
  }, userLoadTime);
});
