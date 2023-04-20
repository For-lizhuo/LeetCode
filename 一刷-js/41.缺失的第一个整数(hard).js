/**
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
    let n = nums.length;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>=n+1||nums[i]<=0){
            nums[i] = Infinity;
        }
    }
    for(let i=0;i<nums.length;i++){
        var temp = Math.abs(nums[i]);
        if(temp!=Infinity){
            nums[temp-1] = -Math.abs(nums[temp-1]);
        }
    }
    let res = 1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            return res;
        }
        else{
            res++;
        }
    }
    return res;
};