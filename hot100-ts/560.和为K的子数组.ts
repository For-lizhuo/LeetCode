// function subarraySum(nums: number[], k: number): number {
//   let res = 0;
//   let sum = 0;
//   for(let i=nums.length-1;i>=0;i--){
//     sum = 0;
//     for(let j=i;j<nums.length;j++){
//       sum += nums[j];
//       if(sum===k){
//         res++;
//       }
//     }
//   }
//   return res;
// };
function subarraySum(nums: number[], k: number): number {
  let map = new Map<number,number>([[0,1]]);
  let preSum = 0;
  let res = 0;
  for(let value of nums){
    preSum += value;
    if(map.has(preSum-k)){
      res += map.get(preSum-k) as number;
    }
    if(map.has(preSum)){
      map.set(preSum,map.get(preSum) as number + 1);
    }
    else if(!map.has(preSum)){
      map.set(preSum,1);
    }
  }
  return res;
};