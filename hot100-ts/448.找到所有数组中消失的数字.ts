function findDisappearedNumbers(nums: number[]): number[] {
  let res = new Array<number>();
  for(let i=0,index:number;i<nums.length;i++){
    index = Math.abs(nums[i])-1;
    if(nums[index]>0){
      nums[index] = -nums[index];
    }
  }
  for(let i=0;i<nums.length;i++){
    if(nums[i]>0){
      res.push(i+1);
    }
  }
  return res;
};