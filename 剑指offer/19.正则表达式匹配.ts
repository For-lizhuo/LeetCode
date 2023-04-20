function isMatch(s: string, p: string): boolean {
  let dp = new Array(s.length+1).fill(0).map(value=>new Array<boolean>(p.length+1).fill(false));
  dp[0][0] = true;
  for(let j=1;j<=p.length;j++){
    if(p[j-1]==='*'){
      dp[0][j] = dp[0][j-2];
    }
  }
  for(let i=1;i<=s.length;i++){
    for(let j=1;j<=p.length;j++){
      if(p[j-1]==='.'||p[j-1]===s[i-1]){
        dp[i][j] = dp[i-1][j-1];
      }
      else if(p[j-1]==='*'){
        if(s[i-1]===p[j-2]||p[j-2]==='.'){
          dp[i][j] = dp[i][j-2]||dp[i-1][j-2]||dp[i-1][j];
        }
        else{
          dp[i][j] = dp[i][j-2];
        }
      }
    }
  }
  return dp[s.length][p.length];
};