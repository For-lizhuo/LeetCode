function findTargetSumWays(nums: number[], target: number): number {
  let res = 0;
  const recursion = (index:number,target:number):void=>{
    if(index===nums.length-1){
      if(nums[index]===target){
        res++;
      }
      if(nums[index]===-target){
        res++;
      }
      return;
    }
    else{
      recursion(index+1,target+nums[index]);
      recursion(index+1,target-nums[index]);
    }  
  }
  recursion(0,target);
  return res;
};