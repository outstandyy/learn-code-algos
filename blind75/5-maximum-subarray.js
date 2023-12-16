/**
 * Not optimized
 *
 * Time: O(n^2)
 * Memory: 0(1)
 */
function notOptimized(nums) {
	let maxSum = -Infinity;
	let currSum;
	for (let i = 0; i < nums.length; i++) {
		currSum = 0;
		for (let j = i; j < nums.length; j++) {
			currSum += nums[j];
			if (maxSum < currSum) {
				maxSum = currSum;
			}
		}
	}
	return maxSum;
}


/**
 * Optimized
 *
 * Time: O(n)
 * Memory: O(1)
 */
function maxSubArray(nums) {
	let maxSubArray = nums[0];
	let curSum = 0;

	for (let i = 0; i < nums.length; i++) {
		if (curSum < 0) {
			curSum = 0;
		}
		curSum += nums[i];
		maxSubArray = Math.max(curSum, maxSubArray);
	}
	return maxSubArray;
}
