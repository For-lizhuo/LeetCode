/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if(nums.length==1) return 1;
    let index = 0,pointer = 1;
    while(pointer<nums.length){
        if(nums[index]!==nums[pointer]){
            index++;
            nums[index] = nums[pointer];
        }           
            pointer++;
    }
    return index+1;
};