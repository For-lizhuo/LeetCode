/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let res = 0,min = prices[0];
    for(let i=1;i<prices.length;i++){
        res = prices[i]-min>res?prices[i]-min:res;
        min = prices[i]<min?prices[i]:min;
    }
    return res;
};