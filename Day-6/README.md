# Day 6

## 2635. Apply Transform Over Each Element in Array

Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

- arr[i] - number from the arr
- i - index of arr[i]
  filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in `js Array.filter()` method.

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
