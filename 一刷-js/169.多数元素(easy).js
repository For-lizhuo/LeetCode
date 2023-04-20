/**
 * @param {number[]} nums
 * @return {number}
 */
//栈
 var majorityElement = function(nums) {
    let stack = [];
    for(let value of nums){
        if(stack.length==0){
            stack.push(value);
        }
        else if(stack[stack.length-1]==value){
            stack.push(value);
        }
        else{
            stack.pop();
        }
    }
    return stack.pop();
};
//O(1)空间复杂度
var majorityElement = function(nums) {
    let res,temp = 0;
    for(let value of nums){
        if(!temp) res = value;
        if(res==temp){
            temp++;
        }
        else if(res!=temp){
            temp--;
        }
    }
    return res;
};