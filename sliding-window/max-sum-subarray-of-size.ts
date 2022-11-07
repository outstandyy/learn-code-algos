/**
 * Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
 *
 * Example 1:
 *
 * Input: [2, 1, 5, 1, 3, 2], k=3
 * Output: 9
 * Explanation: Subarray with maximum sum is [5, 1, 3].
 * Example 2:
 *
 * Input: [2, 3, 4, 1, 5], k=2
 * Output: 7
 * Explanation: Subarray with maximum sum is [3, 4].
 *
 */


/**
 * 1. bruteforce
 *
 * time complexity: O(N*K)
 *
 */
function maxSumSubarrayOfSize1(arr: number[], k: number): number {
  let maxSum: number = 0;
  for (let i = 0; i < arr.length - k; i++) {
    let currentSum: number = 0;
    for (let j = i; j < i + k; j++) {
      currentSum += arr[j];
    }
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

// test
console.log(maxSumSubarrayOfSize1([2, 1, 5, 1, 3, 2], 3));
console.log(maxSumSubarrayOfSize1([2, 3, 4, 1, 5], 2));


/**
 * 2. better approach: use sliding window
 *
 */
function maxSumSubarrayOfSize2(arr: number[], k: number): number {
  let windowEnd: number = 0;
  let windowStart: number = 0;
  let currentSum = 0;
  let maxSum = 0;
  for (; windowEnd < arr.length; windowEnd++) {
    currentSum += arr[windowEnd];

    if (windowEnd >= k) {
      currentSum -= arr[windowStart];
      maxSum = Math.max(maxSum, currentSum);
      windowStart++;
    }
  }
  return maxSum;
}

// test
console.log(maxSumSubarrayOfSize2([2, 1, 5, 1, 3, 2], 3));
console.log(maxSumSubarrayOfSize2([2, 3, 4, 1, 5], 2));
