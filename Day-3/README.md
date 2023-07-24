# Day 3

## 2704. To Be Or Not To Be

Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

- toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
- notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

### Solution 2

- Solution 2

```js
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
	function toBe(n) {
		if (n !== val) {
			return throw new Error("Not Equal");
		} else {
			return true;
		}
	}

	function notTtoBe(n) {
		if (n === val) {
			return throw new Error("Equal");
		} else {
			return true;
		}
	}

	return {
		toBe: toBe,
		notToBe: notToBe,
	};
};

expect(5).toBe(5); // true
expect(5).notToBe(5); // throws "Equal"
```
