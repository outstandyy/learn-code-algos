function getIndexByTarget(fn, targetValue) {
	let left = 0;
	let right = targetValue;
	let resultIndex = -1;

	while (left <= right) {
		const middle = Math.floor((left + right) / 2);
		const middleValue = fn(middle);

		if (middleValue === targetValue) {
			return middle;
		}

		if (Math.abs(middleValue - targetValue) < Math.abs(fn(resultIndex) - targetValue)) {
			resultIndex = middle;
		}

		if (middleValue < targetValue) {
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}

	return resultIndex;
}

function fn(x) {
	return x * 3;
}

console.log(getIndexByTarget(fn, 4));
console.log(getIndexByTarget(fn, 12));
console.log(getIndexByTarget(fn, 19));
console.log(getIndexByTarget(fn, 20));
