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

// Write a function that performs operation provided number of times.
// Do not use any kind of loop operator in your implementation.
// To prevent stack overflow you can use trampoline function.
function repeat(operation, num) {

  function _repeat(operation, num) {
    if (num > 0) {
      operation();
      return _repeat.bind(null, operation, num - 1);
    }
  }
  return trampoline(_repeat.bind(null, operation, num));
}

// % (the remainder operator) can be used to test whether a number is even
// or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define
// whether a positive whole number is even or odd:
//
// • Zero is even.
// • One is odd.

// For any other number N, its evenness is the same as N - 2.
// Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.
// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
// To prevent stack overflow you can use trampoline function.
function isEven(number) {

  function _isEven(number) {
    number = Math.abs(number);
    if (number == 0) {
      return true;
    } else if (number == 1) {
      return false;
    }
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
