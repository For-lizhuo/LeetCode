/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    nums = nums.sort((a,b)=>a-b);
    let result = [];
    let left,right,sum;
    if(!nums||nums.length<3)return result;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0)return result;
        left = i+1;
        right = nums.length-1;
        if(nums[i]==nums[i-1]) continue;
        while(left<right){
            sum = nums[i]+nums[left]+nums[right];
            if(sum==0) {
                result.push([nums[i],nums[left],nums[right]]);
                while(left<right&&nums[left]==nums[left+1]) left++;
                while(left<right&&nums[right]==nums[right-1]) right--;
                left++;right--;
            }
            else if(sum<0){
                left++;
            }
            else if(sum>0){
                right--;
            }
        }
        
    }
    return result;
};