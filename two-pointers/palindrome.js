function isPalindrome(str) {
    var left = 0, right = str.length;
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
