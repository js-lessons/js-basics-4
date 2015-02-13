var slice = Function.call.bind(Array.prototype.slice);

function Spy(target, method) {
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
