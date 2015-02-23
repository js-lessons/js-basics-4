var slice = Function.call.bind(Array.prototype.slice);

function Spy(target, method) {
  // Spy function takes an object and a method and starts spying on method calls.
  // It knows how many times it was called and with what arguments.
  // So Spy function returns an object with two methods: count and args.
  //
  // * count returns number of method calls
  // * args returns an array of arrays of arguments
 var target_function = target[method],
  result = {count : 0, args : []};

  target[method] = function(){
    result.args.push(slice(arguments));
    result.count++;
    return target_function.apply(target, arguments);
  }

  return result;
}

module.exports = Spy
