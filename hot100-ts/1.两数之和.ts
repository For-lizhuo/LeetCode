function twoSum(nums: number[], target: number): number[] {
  let map = new Map<number,number>();
  let res:Array<number> = [];
  for(let i=0;i<nums.length;i++){
    if(map.has(target - nums[i])){
      res = [<number>map.get(target - nums[i]),i];
      break;
    }
    map.set(nums[i],i);
  }
  return res;
};