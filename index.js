'use strict';

module.exports = function(object) {
	var maxDepth = 0;

	function goDeeper(deepObject) {
		var depth = 0;
		for(var key in deepObject) {
			if(typeof deepObject[key] === 'object') {
				depth++;
				return depth += goDeeper(deepObject[key]);
			}
		}

		return 1;
	}

	if(Object.keys(object).length > 0) {
		maxDepth = goDeeper(object);
	}

	return maxDepth;
};
