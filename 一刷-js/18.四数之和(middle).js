/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    if(!nums||nums.length<4) return [];
    nums = nums.sort((a,b)=>a-b);
    let left,right,sum,result=[];
    for(let i=0;i<nums.length-3;i++){
        if(nums[i]>target&&nums[i]>0) return result;
        if(nums[i]==nums[i-1]) continue;
        for(let j=i+1;j<nums.length-2;j++){
            if(nums[j]>target&&nums[i]>=0) return result;
            if(nums[j]==nums[j-1]&&j!=i+1) continue;
            left=j+1;
            right=nums.length-1;
            while(left<right){
                sum = nums[i]+nums[j]+nums[left]+nums[right];
                if(sum==target) {
                    result.push([nums[i],nums[j],nums[left],nums[right]]);
                    while(left<right&&nums[left]==nums[left+1]) left++;
                    while(left<right&&nums[right]==nums[right-1]) right--;
                    left++;right--;
                }
                else if(sum>target){
                    right--;
                }
                else if(sum<target){
                    left++;
                }
                
            }
        }
    }
    return result;
};