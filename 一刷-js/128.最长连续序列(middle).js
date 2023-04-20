/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    let set = new Set(nums),res = 0,cur;
    for(let value of set){
        if(!set.has(value-1)){
            cur = 1;
            while(set.has(value+cur)){
                cur++;
                res = Math.max(res,cur);
            }
        }
    }
    return res;
};