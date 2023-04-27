function canPartition(nums: number[]): boolean {
  if(nums.length<2) return false;
  let sum = 0,max = 0;
  for(let value of nums){
    sum += value;
    max = value>max?value:max;
  }
  if(sum&1) return false;
  let target = sum>>1;
  if(max>target) return false;
  let dp = new Array(nums.length).fill(0).map(value=>new Array(target+1).fill(false));
  dp[0][nums[0]] = true;
  for(let i=0;i<nums.length;i++){
    dp[i][0] = true;
  }
  for(let i=1;i<nums.length;i++){
    for(let j=1;j<=target;j++){
      if(nums[i]>j){
        dp[i][j] = dp[i-1][j];
      }
      else{
        dp[i][j] = dp[i-1][j]||dp[i-1][j-nums[i]];
      }
    }
  }
  return dp[nums.length-1][target];
};