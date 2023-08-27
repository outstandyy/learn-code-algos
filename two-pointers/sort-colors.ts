/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function sortColors(colors) {
  let red = 0;
  let white = 0;
  let blue = colors.length - 1;

  while (white <= blue) {

    if (colors[white] === 0) {

      if (colors[red] !== 0) {
        [colors[red], colors[white]] = [colors[white], colors[red]];
      }

      white++;
      red++;
    }

    else if (colors[white] === 1) {
      white++;
    }

    else {

      if (colors[blue] !== 2) {
        [colors[white], colors[blue]] = [colors[blue], colors[white]];
      }

      blue--;
    }
  }

  return colors;
}


///////// TESTS /////////
console.log(sortColors([0, 1, 0]));
console.log(sortColors([1, 1, 0, 2]));
