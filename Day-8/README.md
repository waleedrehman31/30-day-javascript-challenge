# Day 8

## 2629. Function Composition

Given an array of functions `js [f1, f2, f3, ..., fn]`, return a new function fn that is the function composition of the array of functions.

- The function composition of `js [f(x), g(x), h(x)] is fn(x) = f(g(h(x)))`.

- The function composition of an empty list of functions is the identity function `js f(x) = x`.

You may assume each function in the array accepts one integer as input and returns one integer as output.

### Solution 2

- Solution 2

```js
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
	return function (x) {
		functions.reverse().forEach((fn) => {
			x = fn(x);
		});
		return x;
	};
};
```
