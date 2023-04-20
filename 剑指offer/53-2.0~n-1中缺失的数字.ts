function missingNumber(nums: number[]): number {
  const binarySearch = (left:number,right:number):number=>{
    if(left===right) {
      return nums[left]===left?left+1:left;
    }
    let mid = (left+right)>>1;
    if(nums[mid]===mid) return binarySearch(mid+1,right);
    else return binarySearch(left,mid);
  }
  return binarySearch(0,nums.length-1);
};