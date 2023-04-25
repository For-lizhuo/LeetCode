function maxProfit(prices: number[]): number {
  const dp:number[][] = new Array(prices.length).fill(0).map(value=>new Array(4));
  dp[0][0] = 0;//未持有股票
  dp[0][1] = 0;//未持有股票（当天卖出）
  dp[0][2] = -prices[0];//持有股票
  dp[0][3] = -prices[0];//持有股票（当天买入）
  for(let i=1;i<prices.length;i++){
    dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]+prices[i]);
    dp[i][1] = Math.max(dp[i-1][2],dp[i-1][3])+prices[i];
    dp[i][2] = Math.max(dp[i-1][2],dp[i-1][3]);
    dp[i][3] = dp[i-1][0]-prices[i];
  }
  return Math.max(dp[prices.length-1][0],dp[prices.length-1][1]);
};