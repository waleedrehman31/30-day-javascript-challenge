# Day 2

## 2620. Counter

Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

### Solution 2

- Solution 2 is with closuer function like Object Oriented Programming.

```js
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter1 = function (n) {
	let count = n;
	return function () {
		return count++;
	};
};
```

### Solution 3

- Solution 2 is using Class.

```js
class Counter {
	constructor(n) {
		this.n = n;
	}
	increment() {
		return this.n++;
	}
}

const counterObj = Counter(10);

counterObj.increment();
counterObj.increment();
counterObj.increment();
```
