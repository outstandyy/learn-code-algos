/**
 * Time complexity: O(n/2) => O(n)
 * Space complexity: O(1)
 */

function isPalindrome(str: string): boolean {

  let left: number = 0,
      right: number = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}


////////// TESTS //////////
console.log(isPalindrome('kayak'));
console.log(isPalindrome('abcd'));
