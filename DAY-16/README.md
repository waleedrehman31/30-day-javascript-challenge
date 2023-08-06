# Day 16

## 2637. Promise Time Limit

Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

The time limited function should follow these rules:

- If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
- If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

### Solution 2

- Solution 2

```js
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
	return async function (...args) {
		return new Promise((resolve, reject) => {
			const id = setTimeout(() => reject("Time Limit Exceeded"), t);
			fn(...args)
				.then((res) => resolve(res))
				.catch((err) => reject(err))
				.finally(() => clearTimeout(id));
		});
	};
};
```
