function twoSum(nums, target) {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (map.has(target - nums[i])) {
			return [map.get(target - nums[i]), 0]
		}
		map.set(nums[i], i);
	}

	return [];
}

console.log(twoSum([2,3,4], 6));
