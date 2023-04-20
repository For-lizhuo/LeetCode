function nthUglyNumber(n: number): number {
  let dp = (new Array<number>(n).fill(1));
  let [index2,index3,index5] = [0,0,0];
  let num2:number,num3:number,num5:number;
  for(let i=1;i<n;i++){
    num2 = 2*dp[index2];
    num3 = 3*dp[index3];
    num5 = 5*dp[index5];
    dp[i] = Math.min(num2,num3,num5);
    if(dp[i]===num2) index2++;
    if(dp[i]===num3) index3++;
    if(dp[i]===num5) index5++;
  }
  return dp[n-1];
};
