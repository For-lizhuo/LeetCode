/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    if(nums.length==1) return nums[0];
    let max = nums[0],sum = 0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        max = sum>max?sum:max;
        if(sum<0)sum=0;
    }
    return max;
};