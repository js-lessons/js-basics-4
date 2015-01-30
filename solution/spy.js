var slice = Function.call.bind(Array.prototype.slice);

// Spy function takes an object and a method and starts spying on method calls.
// It knows how many times it was called and with what arguments.
// So Spy function returns an object with two methods: count and args.
//
// * count returns number of method calls
// * args returns an array of arrays of arguments
function Spy(target, method) {
  var res = { count: 0, args: [] };
  var old_method = 'old_' + method;
  target[old_method] = target[method];
  target[method] = function () {
    res.args.push([].slice.call(arguments));
    res.count++;
    return target[old_method].apply(target, arguments);
  }
  return res;
}


module.exports = Spy
