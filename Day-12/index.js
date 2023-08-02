/**
 *
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @returns {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
	let p1 = await promise1;
	let p2 = await promise2;
	return p1 + p2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
