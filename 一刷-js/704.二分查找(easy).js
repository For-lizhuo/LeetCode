/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    const recursion = (left,right)=>{
        let mid = parseInt((left+right)/2);
        if(nums[mid]==target) return mid;
        else if(nums[mid]>target&&left<=mid-1) return recursion(left,mid-1);
        else if(nums[mid]<target&&right>=mid+1) return recursion(mid+1,right);
        else return -1;
    }
    return recursion(0,nums.length-1);
};