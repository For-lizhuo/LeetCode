function isStraight(nums: number[]): boolean {
  let set = new Set<number>(),min = Infinity,max = -Infinity;
  for(let i=0;i<nums.length;i++){
    if(nums[i]===0) continue;
    if(set.has(nums[i])) return false;
    max = Math.max(max,nums[i]);
    min = Math.min(min,nums[i]);
    set.add(nums[i]);
  }
  if(max-min<5) return true;
  return false;
};