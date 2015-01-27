var slice = Function.call.bind(Array.prototype.slice);

function Spy(target, method) {
  var spy = {
    count: 0,
    args: []
  }

  var originalMethod = '__spy_original_method_backup_of_' + method + '__';

  tracer = function () {
    spy.args.push([].slice.call(arguments));
    spy.count = spy.args.length;
    return target[originalMethod].apply(target, arguments);
  }

  target[originalMethod] = target[method];
  target[method] = tracer;

  return spy;
}

module.exports = Spy
