function maxProduct(nums: number[]): number {
  let dpmax = nums[0];
  let dpmin = nums[0];
  let res = nums[0];
  for(let i=1;i<nums.length;i++){
    [dpmax,dpmin] = [Math.max(nums[i],dpmax*nums[i],dpmin*nums[i]),Math.min(nums[i],dpmax*nums[i],dpmin*nums[i])];
    res = Math.max(dpmax,res);
  }
  return res;
};