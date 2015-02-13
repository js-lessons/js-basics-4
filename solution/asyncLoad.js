function asyncLoad(ids, load, done) {
	var arItems = Array.apply(null, Array(ids.length));
	ids.forEach(function (id) {
		load(id, function (oneItem) {
			arItems[id] = oneItem;
			if (arItems.every(function (e) { 
								return (e == undefined) ? false : true; 
							  })
				){
				done(arItems);
			}
		});
	});
}

module.exports = asyncLoad;
