# Day 6

## 2635. Apply Transform Over Each Element in Array

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

- Please solve it without the built-in `js Array.map() ` method.

### Solution 2

- Solution 2

```js
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
	let res = [];
	for (const n of arr) {
		if (fn(n, i)) {
			res.push(n);
		}
	}
	return res;
};
```
