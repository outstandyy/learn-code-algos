/**
 * postfix / prefix:
 * 1). 1 loop LTR: calc prefix for i+1 as multiplication of every before i+1 -> array
 * 2). 2 loop RTL: calc postfix for i-1 as multiplication of every after i-1 -> update array
 * 3). get values by index from array (array.length === nums.length)
 *
 * Time: O(2n) == O(n)
 * Memory: O(1)
 */
function productOfArrayExceptSelf(nums) {
	let res = [];
	let prefix = 1;

	// LTR
	for (let i = 0; i < nums.length; i++) {
		res[i] = prefix;
		prefix *= nums[i];
	}
	console.log('1 result: ', res);

	// RTL
	let postfix = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		console.log('postfix: ', postfix);
		res[i] *= postfix;
		postfix *= nums[i];
	}
	console.log('2 result: ', res);

	return res;
}

console.log(productOfArrayExceptSelf([1,2,3,4]));
