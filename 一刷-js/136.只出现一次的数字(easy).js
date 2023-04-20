/**
 * @param {number[]} nums
 * @return {number}
 */
//借助set
 var singleNumber = function(nums) {
    let set = new Set();
    for(let value of nums){
        if(set.has(value)){
            set.delete(value);
        }
        else{
            set.add(value);
        }
    }
    return Array.from(set)[0];
};
//位运算异或
//a^a=0,a^0=a,a^b=b^a
var singleNumber = function(nums) {
    let res = 0;
    for(let value of nums){
        res^=value;
    }
    return res;
};