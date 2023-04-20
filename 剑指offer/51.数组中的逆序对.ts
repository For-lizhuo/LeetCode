function reversePairs(nums: number[]): number {
  if(nums.length<=1) return 0;
  let res = 0;
  for(let i=1;i<nums.length;i++){
    for(let j=0;j<i;j++){
      if(nums[i]<nums[j]){
        res++;
      }
    }
  }
  return res;
};