function majorityElement(nums: number[]): number {
  let p1=0,p2=1,cal=1;
  while(p1<nums.length&&p2<nums.length){
    if(nums[p1]==nums[p2]){
      cal++;
      p2++;
    }
    else{
      if(cal>1){
        cal--;
        p2++;
      }
      else{
        p1=p2+1;
        p2=p1+1;
      }
    }
  }
  return nums[p1];
};