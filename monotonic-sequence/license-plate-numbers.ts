/**
 * I simplified task to 3 symbols, because there is a lot of code and flow works in that case too.
 * So we have following sequence:
 * 000, 001 ... 999, 00A, 01A ... 99A, 00B, 01B ... 99Z, 0AA ... 9AA, 0AB ... ZZZ
 *
 * We can divide flow into 4 points and 5 ranges (additional range is [index < THREE_DIGITS_RANGE])
 *   THREE_DIGITS_RANGE = DIGITS_AMOUNT ** 3;
 *   TWO_DIGITS_ONE_LETTER_RANGE = (DIGITS_AMOUNT ** 2) * LETTERS_AMOUNT + THREE_DIGITS_RANGE;
 *   ONE_DIGIT_TWO_LETTERS_RANGE = DIGITS_AMOUNT * (LETTERS_AMOUNT ** 2) + TWO_DIGITS_ONE_LETTER_RANGE;
 *   THREE_LETTERS_RANGE = (LETTERS_AMOUNT ** 3) + ONE_DIGIT_TWO_LETTERS_RANGE;
 *
 * And handle each step accordingly.
 * Here I coded ** (power) in this flow to be clear for code reading.
 * Code is not refactored to show clear flow.
 *
 */
function getPlateNumberByIndex(index) {
  const LETTERS_AMOUNT = 26;
  const DIGITS_AMOUNT = 10;

  const THREE_DIGITS_RANGE = DIGITS_AMOUNT ** 3;
  const TWO_DIGITS_ONE_LETTER_RANGE = (DIGITS_AMOUNT ** 2) * LETTERS_AMOUNT + THREE_DIGITS_RANGE;
  const ONE_DIGIT_TWO_LETTERS_RANGE = DIGITS_AMOUNT * (LETTERS_AMOUNT ** 2) + TWO_DIGITS_ONE_LETTER_RANGE;
  const THREE_LETTERS_RANGE = (LETTERS_AMOUNT ** 3) + ONE_DIGIT_TWO_LETTERS_RANGE;
  const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  console.log('range 1: ', THREE_DIGITS_RANGE);
  console.log('range 2: ', TWO_DIGITS_ONE_LETTER_RANGE);
  console.log('range 3: ', ONE_DIGIT_TWO_LETTERS_RANGE);
  console.log('range 4: ', THREE_LETTERS_RANGE);

  let template = '000';
  let currentNumberIndex = 2;

  if (index < THREE_DIGITS_RANGE) {
    // handle numbers
    while (index > 0) {
      const currentNumber = index % 10;
      template = template.slice(0, currentNumberIndex) + currentNumber + template.slice(currentNumberIndex + 1);
      currentNumberIndex--;
      index = Math.floor(index / 10);
    }

  } else if (index >= THREE_DIGITS_RANGE && index < TWO_DIGITS_ONE_LETTER_RANGE) {
    let remainder = (index - THREE_DIGITS_RANGE) % (DIGITS_AMOUNT ** 2);
    let letterIndex = Math.floor((index - THREE_DIGITS_RANGE) / (DIGITS_AMOUNT ** 2));

    // handle letters
    const currentLetter = LETTERS[letterIndex];
    template = template.slice(0, currentNumberIndex) + currentLetter + template.slice(currentNumberIndex + 1);
    currentNumberIndex--;

    // handle numbers
    while (remainder > 0) {
      const currentNumber = remainder % 10;
      template = template.slice(0, currentNumberIndex) + currentNumber + template.slice(currentNumberIndex + 1);
      currentNumberIndex--;
      remainder = Math.floor(remainder / 10);
    }

  } else if (index >= TWO_DIGITS_ONE_LETTER_RANGE && index < ONE_DIGIT_TWO_LETTERS_RANGE) {
    let letterIndex = Math.floor((index - TWO_DIGITS_ONE_LETTER_RANGE) / (DIGITS_AMOUNT));
    let remainder = (index - TWO_DIGITS_ONE_LETTER_RANGE) % (DIGITS_AMOUNT);

    // handle letters
    let lettersRemained = 2;
    while (lettersRemained > 0) {
      const idx = letterIndex % LETTERS_AMOUNT;
      const currentLetter = LETTERS[idx];
      template = template.slice(0, currentNumberIndex) + currentLetter + template.slice(currentNumberIndex + 1);
      currentNumberIndex--;
      letterIndex = Math.floor(letterIndex / LETTERS_AMOUNT);
      lettersRemained--;
    }

    // handle numbers
    while (remainder > 0) {
      const currentNumber = remainder % 10;
      template = template.slice(0, currentNumberIndex) + currentNumber + template.slice(currentNumberIndex + 1);
      currentNumberIndex--;
      remainder = Math.floor(remainder / 10);
    }

  } else if (index >= ONE_DIGIT_TWO_LETTERS_RANGE && index < THREE_LETTERS_RANGE) {
    let letterIndex = Math.floor((index - ONE_DIGIT_TWO_LETTERS_RANGE));

    // handle letters
    let lettersRemained = 3;
    while (lettersRemained > 0) {
      const idx = letterIndex % LETTERS_AMOUNT;
      const currentLetter = LETTERS[idx];
      template = template.slice(0, currentNumberIndex) + currentLetter + template.slice(currentNumberIndex + 1);
      currentNumberIndex--;
      letterIndex = Math.floor(letterIndex / LETTERS_AMOUNT);
      lettersRemained--;
    }
  }

  return template;
}

console.log(getPlateNumberByIndex(1001));
