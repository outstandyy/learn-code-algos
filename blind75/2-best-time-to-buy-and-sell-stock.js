function bestTimeToBuyAndSellStock(prices) {
	let leftBuy = 0, rightSell = 1, maxProfit = 0;

	while (rightSell <= prices.length - 1) {
		const profit = prices[rightSell] - prices[leftBuy];
		if (prices[leftBuy] < prices[rightSell]) {
			maxProfit = Math.max(profit, maxProfit);
		} else {
			leftBuy = rightSell;
		}
		rightSell++;
	}
	return maxProfit;
}

console.log(bestTimeToBuyAndSellStock([7,1,5,3,6,4]));
