/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
	const res = [];
	function helper(array, depth) {
		for (let index = 0; index < array.length; index++) {
			if (typeof array[index] === "object" && depth < n) {
				helper(array[index], depth + 1);
			} else {
				res.push(array[index]);
			}
		}
		return res;
	}
	return helper(arr, 0);
};

let array = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
console.log(flat(array, 2));

let array2 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
console.log(flat(array2, 1));

let array3 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
console.log(flat(array3, 0));
