function countBits(n: number): number[] {
  let dp = new Array<number>(n+1);
  dp[0] = 0;
  for(let i=1;i<=n;i++){
    dp[i] = dp[i>>1]+(i&1);
  }
  return dp;
};