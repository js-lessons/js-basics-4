var EMPTY = {}
function Future(fn) {
  var value = EMPTY;
  var listeners = [];

  this._forceResolve = function (result) {
    value = result;
    listeners.forEach(function (listener) {
      listener(result);
    });
    listeners = [];
  }

  this.onDone = function (newListener) {
    if (value === EMPTY) {
      listeners.push(newListener);
    } else {
      newListener(value);
    }
  }

  if (typeof fn === 'function') fn(this._forceResolve);
}

Future.unit = function (value) {
  return new Future(function (cb) { return cb(value); });
}

Future.prototype.flatMap = function (fn) {
  var result = new Future();
  this.onDone(function (value) {
    var next = fn(value);
    next.onDone(result._forceResolve);
  });
  return result;
}

Future.prototype.map = function (fn) {
  return this.flatMap(function (value) {
    return new Future.unit(fn(value));
  });
}

Future.prototype.map2 = function (other, fn) {
  return this.flatMap(function (x) {
    return other.map(function (y) { return fn(x, y) });
  });
}

Future.sequence = function (futures) {
  return futures.reduce(function (acc, value) {
    return acc.map2(value, function (x, y) { return x.concat([y]); });
  }, Future.unit([]));
}

function asyncLoad(ids, load, done) {
  var combo = Future.sequence(ids.map(function (id) {
    return new Future(function (done) { load(id, done); });
  }));

  combo.onDone(done);
}

module.exports = asyncLoad;
