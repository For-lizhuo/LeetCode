/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let res = [[]],temp;
    for(let i=0;i<nums.length;i++){
        temp = _.cloneDeep(res);
        for(let value of temp){
            value.push(nums[i]);
        }
        res = [...res,...temp];
    }
    return res;
};