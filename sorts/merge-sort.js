/**
 *
 * Time: n*log(n)
 * Memory: O(n)
 */
function mergeSort(nums) {
	if (nums.length < 2) return nums;
	let mid = Math.floor(nums.length / 2);
	let left = nums.slice(0, mid);
	let right = nums.slice(mid);

	function merge(left, right) {
		let result = [];
		let	lLen = left.length;
		let	rLen = right.length;
		let	l = 0;
		let	r = 0;

		while (l < lLen && r < rLen) {
			if (left[l] < right[r]) {
				result.push(left[l++]);
			} else {
				result.push(right[r++]);
			}
		}
		return result.concat(left.slice(l)).concat(right.slice(r));
	}

	return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([5,1,1,2,0,0]));
