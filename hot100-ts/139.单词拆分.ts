function wordBreak(s: string, wordDict: string[]): boolean {
  let set = new Set<string>(wordDict);
  let dp = new Array<boolean>(s.length+1).fill(false);
  dp[0] = true;
  for(let i=1;i<=s.length;i++){
    for(let j=0;j<i;j++){
      if(dp[j]&&set.has(s.slice(j,i))){
        dp[i] = true;
        break;
      }
    }
  }
  return dp[dp.length-1];
};