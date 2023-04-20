/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if(n==1) return 1;
    if(n==2) return 2;
    let res = 2,pre = 1; 
    for(let i=3;i<=n;i++){
        [res,pre] = [res + pre,res];
    }
    return res;
};