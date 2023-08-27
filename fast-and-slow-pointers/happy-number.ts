/**
 * Naive approach
 * Time complexity: O(log(n))
 * Space complexity: O(log(n))
 */
export function isHappyNumberNaive(n: number): boolean {

  const set = new Set();
  let chars = [...n.toString()];
  console.log('chars: ', chars);
  let qSum = 0;
  while (true) {
    qSum = calculateQSum(chars);
    console.log('qSum: ', qSum);
    if (qSum === 1) {
      return true;
    }
    if (set.has(qSum)) {
      return false;
    }
    set.add(qSum);
    chars = [...qSum.toString()];
  }
}

function calculateQSum(chars: string[]) {
  let result = 0;
  for (let i = 0; i < chars.length; i++) {
    result += (+chars[i]) ** 2;
  }
  return result;
}


/**
 * Time complexity: O(log(n))
 * Space complexity: O(1)
 */
function isHappyNumber(n: number) {
  // Helper function that calculates the sum of squared digits.
  function sumOfSquaredDigits(num: number) {
    let totalSum = 0;
    while (num > 0) {
      let temp = Math.floor(num / 10),
        digit = num % 10;
      num = temp;
      totalSum += digit ** 2;
    }
    console.log('\t\tSum of squared digits: ', totalSum)
    return totalSum;
  }

  let slowPointer = n; // The slow pointer value
  console.log('\tSetting slow pointer = input number', slowPointer)
  console.log('\tSetting fast pointer = sum of squared digits of', n)
  let fastPointer = sumOfSquaredDigits(n); // The fast pointer value
  console.log('\tFast pointer:', fastPointer)
  while (fastPointer !== 1 && slowPointer !== fastPointer) {
    console.log('\n\tRepeatedly updating slow and fast pointers\n')
    // Incrementing the slow pointer by 1 iteration
    slowPointer = sumOfSquaredDigits(slowPointer);
    console.log('\t\tThe updated slow pointer is', slowPointer, '\n')
    // Incrementing the fast pointer by 2 iterations
    fastPointer = sumOfSquaredDigits(sumOfSquaredDigits(fastPointer));
    console.log('\t\tThe updated fast pointer is', fastPointer, '\n')
  }
  // If 1 is found then it returns True, otherwise False
  if (fastPointer == 1) {
    console.log('\tSince fast pointer has converged to 1, the input number is a happy number.\n')
    return true
  }
  console.log('\tFast pointer has not converged to 1, the input number is not happy number.\n')
  return false
}

////////// TESTS //////////
console.log(isHappyNumber(1));
console.log(isHappyNumber(19));
console.log(isHappyNumber(25));
