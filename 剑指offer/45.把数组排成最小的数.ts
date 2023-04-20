function minNumber(nums: number[]): string {
  return nums.sort((a,b)=>{
    return `${a}${b}`.localeCompare(`${b}${a}`)
  }).join('');
};