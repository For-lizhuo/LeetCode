function maxSubArray(nums: number[]): number {
  let res = nums[0],sum = nums[0];
  for(let i=1;i<nums.length;i++){
    if(sum<0) sum = nums[i];
    else if(sum>=0) sum += nums[i];
    res = sum>res?sum:res;
  }
  return res;
};