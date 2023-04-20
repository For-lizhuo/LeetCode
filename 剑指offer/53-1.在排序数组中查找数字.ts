function search(nums: number[], target: number): number {
  const binarySearch = (left:number,right:number):number =>{
    if(right<left||(right===left&&nums[left]!=target)) return -1;
    let mid = (right+left)>>1;
    if(nums[mid]===target) return mid;
    else if(nums[mid]>target) return binarySearch(left,mid-1);
    else return binarySearch(mid+1,right);
  }
  const index = binarySearch(0,nums.length-1);
  if(index===-1) return 0;
  let left = index-1,right = index+1,res = 1;
  while(left>=0&&nums[left]===target){
    res++;
    left--;
  }
  while(right<nums.length&&nums[right]===target){
    res++;
    right++;
  }  
  return res;
};