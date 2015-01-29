function trampoline(fn) {
  // Used in some Lisp implementations, a trampoline is a loop that iteratively invokes thunk-returning functions (continuation-passing style).
  // A single trampoline is sufficient to express all control transfers of a program;
  // a program so expressed is trampolined, or in trampolined style; converting a program to trampolined style is trampolining.
  // Trampolined functions can be used to implement tail-recursive function calls in stack-oriented programming languages.
  //
  // http://en.wikipedia.org/wiki/Trampoline_(computing)
  // http://raganwald.com/2013/03/28/trampolines-in-javascript.html
  // https://taylodl.wordpress.com/2013/06/07/functional-javascript-tail-call-optimization-and-trampolines/

  while (fn && fn instanceof Function) {
    fn = fn.apply(fn.context, fn.args);
  }

  return fn;
}

function factorial(n) {
  // Trampoline usage example

  function _factorial(acc, n) {
    return n ? _factorial.bind(null, acc * n, --n) : acc;
  }

  return trampoline(_factorial.bind(null, 1, n));
}

function repeat(operation, num) {
  function _repeat(operation, num) {
    if (num > 0) {
      operation();
      return _repeat.bind(null, operation, --num);
    }
  }

  return trampoline(_repeat.bind(null, operation, num));
}

function isEven(number) {
  function _isEven(number) {
    if (number < 0) return _isEven.bind(null, -number);
    if (number < 2) return !number;
    return _isEven.bind(null, number - 2);
  }

  return trampoline(_isEven.bind(null, number));
}

module.exports = {
  trampoline: trampoline,
  factorial: factorial,
  repeat: repeat,
  isEven: isEven
}
