function exchange(nums: number[]): number[] {
  let head = 0,tail = nums.length-1,temp:number;
  while(head<tail){
    if((nums[head]&1)===1){
      //head指向奇数
      head++;
      continue;
    }
    //head指向偶数
    else{
      while(head<tail&&(nums[tail]&1)===0)tail--;
      temp = nums[head];
      nums[head] = nums[tail];
      nums[tail] = temp;
    }
  }
  return nums;
};