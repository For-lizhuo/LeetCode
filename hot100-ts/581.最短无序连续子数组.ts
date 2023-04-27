// function findUnsortedSubarray(nums: number[]): number {
//   let sortedNums = [...nums].sort((a,b)=>a-b);
//   let l=-1,r=-1;
//   for(let i=0;i<nums.length;i++){
//     if(nums[i]!==sortedNums[i]){
//       if(l===-1){
//         l = i;
//       }
//       else{
//         r = i;
//       }
//     }
//   }
//   return l===-1?0:r===-1?1:r-l+1;
// };
function findUnsortedSubarray(nums: number[]): number {
  let r=-1,l=-1;
  for(let i=0,max=-Infinity;i<nums.length;i++){
    if(nums[i]<max){
      r = i;
    } 
    max = Math.max(max,nums[i]);
  }
  for(let i=nums.length-1,min=Infinity;i>=0;i--){
    if(nums[i]>min){
      l = i;
    } 
    min = Math.min(min,nums[i]);
  }
  return l===r?0:r-l+1;
};