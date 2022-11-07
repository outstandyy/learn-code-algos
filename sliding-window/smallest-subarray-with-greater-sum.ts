/**
 * Given an array of positive integers and a number ‘S’,
 * find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.
 *
 * Example 1:
 *
 * Input: [2, 1, 5, 2, 3, 2], S=7
 * Output: 2
 * Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].
 *
 * Example 2:
 *
 * Input: [2, 1, 5, 2, 8], S=7
 * Output: 1
 * Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [8].
 *
 * Example 3:
 *
 * Input: [3, 4, 1, 1, 6], S=8
 * Output: 3
 * Explanation: Smallest subarrays with a sum greater than or equal to ‘8’ are [3, 4, 1] or [1, 1, 6].
 */

export {};

/**
 * time complexity: O(N + N) === O(N)
 * space complexity: O(1)
 */
function go1(arr: number[], s: number): any {
  let windowSum = 0;
  let minLength = Infinity;

  for (let windowStart = 0, windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // add the next element
    windowSum += arr[windowEnd];

    // shrink the window as small as possible until the 'window_sum' is smaller than 's'
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
}

// test
console.log(go1([2, 1, 5, 2, 3, 2], 7));
console.log(go1([3, 4, 1, 1, 6], 8));
console.log(go1( [2, 1, 5, 2, 3, 2], 7));


