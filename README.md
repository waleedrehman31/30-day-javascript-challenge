# 30-Days JavaScript Challenge

This challenge is from [LeetCode](https://leetcode.com/studyplan/30-days-of-javascript/)

## Day 1

### 2667. Create Hello World Function

Write a function createHelloWorld. It should return a new function that always returns "Hello World". [Solution](./Day-1/index.js)

## Day 2

### 2620. Counter

Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
[Solution](./Day-2/index.js)

## Day 3

### 2704. To Be Or Not To Be

Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

- toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
- notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
  [Solution](./Day-3/index.js)

## Day 4

### 2665. Counter II

Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

- increment() increases the current value by 1 and then returns it.
- decrement() reduces the current value by 1 and then returns it.
- reset() sets the current value to init and then returns it.
  [Solution](./Day-4/index.js)

## Day 5

### 2635. Apply Transform Over Each Element in Array

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

- Please solve it without the built-in `js Array.map() ` method.
  [Solution](./Day-5/index.js)

## Day 6

### 2635. Apply Transform Over Each Element in Array

Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

- arr[i] - number from the arr
- i - index of arr[i]
  filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in `js Array.filter()` method.
[Solution](./Day-6/index.js)

## Day 7

### 2626. Array Reduce Transformation

Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

- If the length of the array is 0, it should return init.

Please solve it without the built-in `js Array.reduce()` method.
[Solution](./Day-7/index.js)
