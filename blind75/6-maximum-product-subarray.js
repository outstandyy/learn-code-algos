/**
 * Not optimized
 *
 * Time: O(n^2)
 * Memory: O(1)
 */
function notOptimized(nums) {
	let maxProduct = nums[0];
	let currProduct;
	for (let i = 0; i < nums.length; i++) {
		currProduct = 1;
		for (let j = i; j < nums.length; j++) {
			currProduct *= nums[j];
			if (maxProduct < currProduct) {
				maxProduct = currProduct;
			}
		}
	}
	return maxProduct;
}




