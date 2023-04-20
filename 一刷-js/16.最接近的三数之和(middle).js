/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b)=>a-b);
    let sum,left,right,result=undefined,gap;
    for(let i=0;i<nums.length-2;i++){
        left = i+1;
        right = nums.length-1;
        while(left<right){
            sum = nums[i]+nums[left]+nums[right];
            gap = sum-target;
            if(result==undefined||Math.abs(gap)<Math.abs(result-target)){
                result = sum;
            }
            gap>0?right--:left++;
        }       
    }
    return result;
};