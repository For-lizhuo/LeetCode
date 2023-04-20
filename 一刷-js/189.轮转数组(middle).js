/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//数组的内置方法
 var rotate = function(nums, k) {
    for(let i=1;i<=k;i++){
        nums.unshift(nums.pop())
    }
};
var rotate = function(nums, k) {
    let n = nums.length;
    k = k%n; 
    let temp = [...nums];
    for(let i=k,j=0;i<n;i++,j++){
        nums[i] = temp[j];
    }
    for(let i=0,j=n-k;j<n;i++,j++){
        nums[i] = temp[j];
    }
};