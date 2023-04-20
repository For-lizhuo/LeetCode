// 暴力法
// function maxSlidingWindow(nums: number[], k: number): number[] {
//   let res = new Array<number>();
//   let maxIndex = -1,left = 0,right = k-1,max = -Infinity;
//   while(right<nums.length){
//     if(maxIndex<left){
//       max = -Infinity;
//       for(let i=left;i<=right;i++){
//         if(nums[i]>max){
//           max = nums[i];
//           maxIndex = i;
//         }
//       }
//     }
//     else if(nums[right]>max){
//       max = nums[right];
//       maxIndex = right;
//     }
//     res.push(max);
//     left++;
//     right++;
//   }
//   return res;
// };

//单调队列
function maxSlidingWindow(nums: number[], k: number): number[] {
  let res = new Array<number>();
  let queue = new Array<number>();
  for (let i = 0; i < k; i++) {
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
        queue.pop();
    }
    queue.push(i);
}
  for(let left=1,right=k;right<nums.length;left++,right++){
    while(queue.length&&nums[queue[queue.length-1]]<=nums[right]){
      queue.pop();
    }
    queue.push(right);
    while(queue[0]<left){
      queue.unshift();
    }
    res.push(queue[0]);
  }
  return res;
};