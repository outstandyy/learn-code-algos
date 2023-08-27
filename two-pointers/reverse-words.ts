/**
 *
 * Time complexity: O(n+n) = O(n)
 * Space complexity: O(n)
 */

function reverseWords(sentence: string) {
  let chars: string[] = [...sentence.trim().replace(/  +/g, ' ')];
  let strLen: number = chars.length;

  chars = strRev(chars, 0, strLen - 1);

  let start: number = 0,
    end: number = 0;

  while (start < strLen) {
    while (end < strLen && chars[end] != ' ')
      end += 1;
    strRev(chars, start, end - 1);
    start = end + 1;
    end += 1;
  }
  return chars.join('');
}

// a function that reverses a whole sentence character by character
function strRev(chars: string[], startRev: number, endRev: number): string[] {
  while (startRev < endRev) {
    let temp = chars[startRev];
    chars[startRev] = chars[endRev];
    chars[endRev] = temp;

    startRev += 1;
    endRev -= 1;
  }
  return chars;
}


///////// TESTS /////////
console.log(reverseWords('Hello world!'));
console.log(reverseWords('My name is username'));
