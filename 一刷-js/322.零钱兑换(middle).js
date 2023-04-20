/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//暴力递归
 var coinChange = function(coins, amount) {
    let res = Infinity,n = coins.length;
    coins = coins.sort((a,b)=>b-a);
    const recursion = (target,index,path)=>{
        if(!target){
            return res = Math.min(res,path);
        }
        if(index>=n) return;
        if(target>=coins[index]){
            recursion(target-coins[index],index,path+1);
        }
        recursion(target,index+1,path);
    }
    recursion(amount,0,0);
    return res==Infinity?-1:res;
};
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//动态规划
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    let dp = new Array(amount+1).fill(Infinity);
    dp[0] = 0;
    for(let i=1;i<=amount;i++){
        for(let coin of coins){
            if(i-coin>=0){
                dp[i] = Math.min(dp[i],dp[i-coin]+1);
            }
        }
    }
    return dp[amount]==Infinity?-1:dp[amount];
};