function reduce(array, f, start) {
	var result = (start == undefined) ? array[0] : start;
	for (var i = (start == undefined) ? 1 : 0; i < array.length; i++){
		result = f(result, array[i]);
	}
	return result;
}

function map(array, f) {
  array.forEach(
    function(element, index){
        array[index] = f(element);
    }
  );
  return array;    
}

function filter(array, f) {
	var new_array = [];
	if(array.length == 0){
		return new_array;
	}else{
		for(i=0; i<array.length; i++){
			if(f(array[i])){
				new_array.push(array[i]);
			}			
		}	
		return new_array;
	}
}

function flatmap(array, f) {
	var result = reduce(array, function(arr, x) {
		return arr.concat(f(x));
	}, []);
    return result;
}

function every(array, f) {
	for(i=0;i<array.length;i++){
		if(!f(array[i])){
			return false;
		}
	}
	return true;
}

function some(array, f) {
	for(i=0;i<array.length;i++){
		if(f(array[i])){
			return true;
		}
	}
	return false;
}

module.exports = {
  map: map,
  reduce: reduce,
  filter: filter,
  flatmap: flatmap,
  every: every,
  some: some
}
