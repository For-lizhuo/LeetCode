/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let arr = [],res,temp=0,cur,sell = prices[prices.length-1];
    for(let i=prices.length-2;i>=0;i--){
        cur = prices[i];
        if(cur>sell){
            sell = cur;
            if(temp>0){
                arr.push(temp);
                temp = 0;
            }
        } 
        else if(cur<=sell){
            temp=(sell-cur);
            if(i==0){
                arr.push(temp);
            }
        }
    }
    console.log(arr)
};
maxProfit([3,3,5,0,3,3,5,0,0,3,1,4,0,3,1,4])