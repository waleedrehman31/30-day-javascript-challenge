# Day 1

## Create Hello World Function

### Anonymus Function

- Function call it self andd return not a function only string of hello world

```js
const createHelloWorldAnonymusFunction = function () {
	return (function () {
		return "Hello World";
	})();
};
```

### Hosting function

- It is function you can call it first and declare later. when file executed all function hosting at the top of the file so it's not a problem. BUT in python can not support function hosting. But Anonymus like arrow hosting do not support Function Hosting

### Closure function

- A fucntion in javascript have access to have variable outside of their scope

- Factory Functions use as object before classes in JS

```js
function createCounter() {
	let value = 0; // HIDDEN STATE

	function increment() {
		return ++value;
	}

	return {
		increment: increment,
	};
}

//object
const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1.increment());
console.log(counter1.increment());

console.log(counter2.increment());
```

### Rest Arguments

- ... this is call spread

```js
let a = [1, 2];
let b = [3, 4];

console.log("🚀 ~ file: index.js:56 ~ [...a, ...b]:", [...a, ...b]);

function add(...args) {
	console.log(args[0], +args[1]);
}

add(...a, ...b);
add(0, 1);
```

### High order function

-  The funcion that accepts a function and/or return function is called a higher-order function.