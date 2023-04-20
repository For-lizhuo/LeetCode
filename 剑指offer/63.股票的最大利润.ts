function maxProfit(prices: number[]): number {
  let res = 0,buy = 0;
  for(let i=1;i<prices.length;i++){
    if(prices[i]<prices[buy]){
      buy = i;
    }
    else if(prices[i]>prices[buy]){
      res = Math.max(prices[i]-prices[buy],res);
    }
  }
  return res;
};