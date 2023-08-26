/**
 * Naive approach
 * Time complexity: O(n3)
 */
export function naiveSumOfThree(nums: number[], target: number): boolean {

  // Replace this placeholder return statement with your code

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === target) {
          return true;
        }
      }
    }
  }

  return false;
}

console.log(naiveSumOfThree([1,2,3], 6));


/**
 * Time complexity:
 * [Sorting] O(n * log(n)) + [Loops] O(n2) => O(n * log(n) + n2) => O(n2)
 *
 * Space complexity: O(1) (js sort() in-place sorting)
 */
export function sumOfThree(nums: number[], target: number): boolean {

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let low = i + 1,
        high = nums.length - 1;

    while (low < high) {
      const currentSum = nums[i] + nums[low] + nums[high];

      if (currentSum === target) {
        return true;
      }

      currentSum < target ? low++ : high--;
    }
  }

  return false;
}

////////// TESTS //////////
console.log(sumOfThree([3, 7, 1, 2, 8, 4, 5], 10));
console.log(sumOfThree([-1, 2, 1, -4, 5, -3], 7));
