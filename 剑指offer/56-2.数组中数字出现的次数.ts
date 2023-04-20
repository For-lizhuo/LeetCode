function singleNumber(nums: number[]): number {
  let arr = new Array<number>(32).fill(0);
  for(let i=0,j=0;i<nums.length;i++,j=0){
    while(nums[i]){
      arr[j] += nums[i]&1;
      nums[i] = nums[i]>>1;
      j++;
    }
  }
  let res = 0;
  for(let i=0;i<32;i++){
    res = res+(1<<i)*(arr[i]%3);
  }
  return res;
};