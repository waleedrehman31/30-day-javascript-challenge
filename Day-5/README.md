# Day 5

## 2635. Apply Transform Over Each Element in Array

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

- Please solve it without the built-in `js Array.map() ` method.

### Solution 2

- Solution 2

```js
var map = function (arr, fn) {
	const res = new Array(arr.length); //dynamic array

	for (const i in arr) {
		res[i] = fn(arr[i], Number(1));
	}
	return res;
};
```
