/**
 * @return {Function}
 */
// create a function it will return another function which return Hello World string.
const createHelloWorld = function () {
	return function () {
		return "Hello World";
	};
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
