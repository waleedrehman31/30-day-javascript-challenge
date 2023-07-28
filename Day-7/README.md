# Day 7

## 2626. Array Reduce Transformation

Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

- If the length of the array is 0, it should return init.

Please solve it without the built-in `js Array.reduce()` method.

### Solution 2

- Solution 2

```js
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
	let res = init;
  if(nums.length === 0) return res
	for (const n of nums) {
		res = fn(res, n);
	}
	return res;
};
```
