 var searchInsert = function(nums,target,head,tail,res) {
    let middle = ~~((head+tail)/2);
    if(nums[head]<=nums[tail]){
        while(head<=tail){
            if(nums[middle]==target) {
                res[0] = middle;
                return;
            }
            else if(nums[middle]<target){
                head = middle+1;
            }
            else{
                tail = middle-1;
            }
            middle = ~~((head+tail)/2);
        }
    }
    else{
        searchInsert(nums,target,head,middle,res);
        searchInsert(nums,target,middle+1,tail,res);
    }
    return ;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let res = [-1];
    searchInsert(nums,target,0,nums.length-1,res);
    return res[0];
};