/**
 * 반복문으로 이진탐색하여 target index 구하기
 * @param {Array} array
 * @param {Number} target
 * @returns {Number}
 */
const binarySearch = (array, target) => {
	const length = array.length;
	let left = 0;
	let right = length - 1;
	let mid = 0, tmp;

	while(right >= left) {
		mid = parseInt((left + right) / 2);
		tmp = array[mid];
		if (tmp === target) {
			return mid;
		}

		if (tmp > target) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return;
};

/**
 * 재귀문법으로 이진탐색하여 target index 구하기
 * @param {Array} array
 * @param {Number} left
 * @param {Number} right
 * @param {Number} target
 * @returns {Number}
 */
const binarySearchRecursive = (array, left, right, target) => {
	if (right < left) {
		return;
	}

	const mid = parseInt((left + right) / 2);
	const tmp = array[mid];

	if (tmp === target) {
		return mid;
	}

	if (tmp > target) {
		return binarySearchRecursive(array, left, mid - 1, target);
	} else {
		return binarySearchRecursive(array, mid + 1, right, target);
	}
};
