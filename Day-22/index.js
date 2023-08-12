Array.prototype.last = function () {
	if (this.length === 0) {
		return -1;
	} else {
		let last = this.slice(-1);
		return last[0];
	}
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
