function Solution(symbolsAmount, index) {
	let edges = new Array(symbolsAmount + 2).fill(1);
	for (let i = 1; i <= symbolsAmount + 1; ++i) {
		edges[i] = edges[i - 1] + Math.pow(10, symbolsAmount - i + 1) * Math.pow(26, i - 1);
	}

	index %= edges[symbolsAmount + 1];

	console.log('edges: ', edges);

	console.log('index: ', index);

	let digitsNum = 0;
	while (index < edges[symbolsAmount - digitsNum]) {
		digitsNum++;
	}

	console.log('digitsNum: ', digitsNum);

	// start with 00...0A..A: number of 0 is digitsNum, number of A is symbolsAmount - digitsNum;
	let remainder = index - edges[symbolsAmount - digitsNum];

	console.log('remainder: ', remainder);

	let right_part = Math.floor(remainder / Math.pow(10, digitsNum));
	let left_part = remainder % Math.pow(10, digitsNum);

	// let right_part = Math.floor(remainder % Math.pow(26, n - digitsNum));
	// let left_part = remainder % Math.pow(26, n- digitsNum);

	console.log('right_part: ', right_part);
	console.log('left_part: ', left_part);

	let left = '';
	if (digitsNum) {
		left = left_part.toString();
		while (left.length < digitsNum) {
			left = '0' + left;
		}
	}

	console.log('left: ', left);

	let right = '';
	let lettersRemained = symbolsAmount - digitsNum;
	while (lettersRemained > 0) {
		let c = right_part % 26;
		right = String.fromCharCode(c + 'A'.charCodeAt(0)) + right;
		right_part = Math.floor(right_part / 26);
		lettersRemained--;
	}

	return left + right;
}

// Example usage:
let symbolsAmount = 3;

console.log(Solution(symbolsAmount, 999));
console.log(Solution(symbolsAmount, 1000));
console.log(Solution(symbolsAmount, 1001));

console.log(Solution(symbolsAmount, 3599));
console.log(Solution(symbolsAmount, 3600));
console.log(Solution(symbolsAmount, 3601));

console.log(Solution(symbolsAmount, 10359));
console.log(Solution(symbolsAmount, 10360));
console.log(Solution(symbolsAmount, 10361));

console.log(Solution(symbolsAmount, 27936));
