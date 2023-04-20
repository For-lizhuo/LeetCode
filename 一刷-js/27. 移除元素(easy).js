/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let left = 0, right = nums.length - 1;
    while(left<right){
        while(left<right&&nums[right]==val){
            right--;
        }
        if(nums[left]==val&&nums[right]!=val){
            nums[left]=nums[right];
            right--;
            left++;
        }
        else if(nums[left]==val&&nums[right]==val){
            return left;
        }
        else if(nums[left]!=val){
            left++;
        }
    }
    return left;
};