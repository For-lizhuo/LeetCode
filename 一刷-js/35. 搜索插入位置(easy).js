/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let head = 0, tail = nums.length-1;
    while(head<=tail){
        middle = ~~((head+tail)/2);
        if(nums[middle]==target) return middle;
        else if(nums[middle]<target){
            head = middle+1;
        }
        else{
            tail = middle-1;
        }
    }
    return head;
};