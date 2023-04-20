/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let res = 0, buy = prices[0],cur;
    for(let i=1;i<prices.length;i++){
        cur = prices[i];
        if(cur>buy) res += (cur-buy);
        buy = cur;
    }
    return res;
};