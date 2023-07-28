/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
	let res = init;
	if (nums.length === 0) return res;
	for (let i = 0; i < nums.length; i++) {
		res = fn(res, nums[i]);
		console.log(res);
	}
	return res;
};

const nums = [1, 2, 3, 4];
const fn = function sum(accum, curr) {
	return accum + curr * curr;
};
const init = 100;

reduce(nums, fn, init);
console.log(reduce(nums, fn, init));
