function findRepeatNumber(nums: number[]): number {
  for(let i=0,value:number;i<nums.length;i++){
    value = Math.abs(nums[i]);
    //Object.is(0,-0) === false
    if(nums[value]<0||Object.is(nums[value],-0)) return value;
    else{
      nums[value] = -nums[value];
    }
  }
  return -1;
};
function findRepeatNumber2(nums: number[]): number {
  for(let i=0;i<nums.length;){
    if(nums[i]===i) {
      i++;
      continue;
    }
    else if(nums[i]===nums[nums[i]]) {
      return nums[i];
    }
    else {
      let temp = nums[i];
      nums[i] = nums[nums[i]];
      nums[temp] = temp;
    }
  }
  return -1;
};