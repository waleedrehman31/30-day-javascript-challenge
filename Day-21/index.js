/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
	const result = [];
	const length = arr.length;
	for (let i = 0; i < length; ) {
		const subarray = [];
		let j = 0;
		for (j = 0; j < size && j + i < length; j++) {
			subarray.push(arr[j + i]);
		}
		i += j;
		result.push(subarray);
	}
	return result;
};
