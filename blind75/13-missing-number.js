/**
 *
 * 1). 1 loop: get sum of current nums
 * 2). 2 loop: get full sum of indexes
 * 3). fullSum - currentSum
 *
 * Time: O(2n) = O(n)
 * Memory: O(1)
 */
function missingNumber(nums) {
	let currentSum = 0;
	for (let i = 0; i < nums.length; i++) {
		currentSum += nums[i];
	}

	let fullSum = 0;
	for (let i = 0; i < nums.length; i++) {
		fullSum += i + 1;
	}

	return fullSum - currentSum;
}
