# 30-Days JavaScript Challenge

This challenge is from [LeetCode](https://leetcode.com/studyplan/30-days-of-javascript/)

## Day 1

### 2667. Create Hello World Function

Write a function createHelloWorld. It should return a new function that always returns "Hello World". [Solution](./Day-1/index.js)

---

## Day 2

### 2620. Counter

Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
[Solution](./Day-2/index.js)

---

## Day 3

### 2704. To Be Or Not To Be

Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

- toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
- notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
  [Solution](./Day-3/index.js)

---

## Day 4

### 2665. Counter II

Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

- increment() increases the current value by 1 and then returns it.
- decrement() reduces the current value by 1 and then returns it.
- reset() sets the current value to init and then returns it.
  [Solution](./Day-4/index.js)

---

## Day 5

### 2635. Apply Transform Over Each Element in Array

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

- Please solve it without the built-in `js Array.map() ` method.
  [Solution](./Day-5/index.js)

## Day 6

---

### 2635. Apply Transform Over Each Element in Array

Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

- arr[i] - number from the arr
- i - index of arr[i]
  filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in `js Array.filter()` method.
[Solution](./Day-6/index.js)

---

## Day 7

### 2626. Array Reduce Transformation

Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

- If the length of the array is 0, it should return init.

Please solve it without the built-in `js Array.reduce()` method.
[Solution](./Day-7/index.js)

---

## Day 8

### 2629. Function Composition

Given an array of functions `js [f1, f2, f3, ..., fn]`, return a new function fn that is the function composition of the array of functions.

- The function composition of `js [f(x), g(x), h(x)] is fn(x) = f(g(h(x)))`.

- The function composition of an empty list of functions is the identity function `js f(x) = x`.

You may assume each function in the array accepts one integer as input and returns one integer as output.
[Solution](./Day-8/index.js)

---

## Day 9

### 2703. Return Length of Arguments Passed

Write a function argumentsLength that returns the count of arguments passed to it.
[Solution](./Day-9/index.js)

---

## Day 10

### 2666. Allow One Function Call

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

- The first time the returned function is called, it should return the same result as fn.
- Every subsequent time it is called, it should return undefined.
  [Solution](./Day-10/index.js)

---

## Day 11

### 2623. Memoize

Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

- sum accepts two integers a and b and returns a + b.
- fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
- factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) \* n otherwise.
  [Solution](./Day-11/index.js)

---

## Day 12

### Add Two Promises

Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

[Solution](./Day-12/index.js)
