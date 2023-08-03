# Day 13

## 2621. Sleep

Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

### Solution 2

- Solution 2

```js
/**
 * @param {number} millis
 */
async function sleep(millis) {
	function callback(resolve, reject) {
		setTimeout(resolve, millis);
	}
	return new Promise(callback);
}
```
