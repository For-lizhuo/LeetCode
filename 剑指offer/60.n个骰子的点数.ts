function dicesProbability(n: number): number[] {
  let dp = (new Array(n+1)).map(item => new Array(6*n+1).fill(0));
  for(let i=1;i<=6;i++){
    dp[1][i] = 1;
  }
  for(let k=2;k<=n;k++){
    for(let i=k;i<=6*k;i++){
      for(let j=1;j<=6;j++){
        if(i-j>=0){
          dp[k][i] += dp[k-1][i-j];
        }
      }
    }
  }
  console.log(dp)
  return []
};
dicesProbability(2)