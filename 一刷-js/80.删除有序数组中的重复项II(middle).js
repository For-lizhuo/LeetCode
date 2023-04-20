/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let n = nums.length;
    for(let i=2;i<n;i++){
        if(nums[i]==nums[i-1]&&nums[i]==nums[i-2]){
            nums.splice(i,1);
            i--;
            n--;
        }
    }
    return n;
};
//双指针
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let n = nums.length;
    if([1,2].includes(n)) return n;
    let slow = 2,fast = 2;
    while(fast<n){
        if(nums[fast]!=nums[slow-2]){
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
};