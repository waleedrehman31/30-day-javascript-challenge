/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
	const grouped = {};
	const length = this.length;
	for (let index = 0; index < length; index++) {
		const id = fn(this[index]);
		if (grouped[id] === undefined) grouped[id] = [];
		grouped[id].push(this[index]);
	}
	return grouped;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
