/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
	const newObj = {};
	const arrs = [...arr1, ...arr2];
	for (let index = 0; index <= arrs.length - 1; index++) {
		newObj[arrs[index].id] = { ...newObj[arrs[index].id], ...arrs[index] };
	}
	return Object.values(newObj);
};
