var slice = Function.call.bind(Array.prototype.slice);

function Spy(target, method) {
    // Spy function takes an object and a method and starts spying on method calls.
    // It knows how many times it was called and with what arguments.
    // So Spy function returns an object with two methods: count and args.
    //
    // * count returns number of method calls
    // * args returns an array of arrays of arguments
    var array;
    var arr = {count: 0, args:[]};
    var old = target[method];
    target[method] = function(){
        debugger
        array = [];
        arr.count++;
        for(var i = 0; i<arguments.length; i++){
            array.push(arguments[i]);
        }
        arr.args.push(array);
        return old.apply(target,arguments);
    }
    return arr;
}
module.exports = Spy




