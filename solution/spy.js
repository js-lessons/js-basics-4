var slice = Function.call.bind(Array.prototype.slice);

function Spy(target, method) {
  // Spy function takes an object and a method and starts spying on method calls.
  // It knows how many times it was called and with what arguments.
  // So Spy function returns an object with two methods: count and args.
  //
  // * count returns number of method calls
  // * args returns an array of arrays of arguments
  var spyResult = {count: 0, args: []};
  var originalFunction = target[method];
  target[method] = function() {
  	spyResult.count++;
  	spyResult.args.push(slice(arguments));
  	return originalFunction.apply(this, arguments);
  }
  return spyResult;
}

module.exports = Spy
