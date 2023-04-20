/**
 * @param {number[]} nums
 * @return {number}
 */
//递归超时
 var lengthOfLIS = function(nums) {
    let res = 0;
    const recursion = (path,index,length)=>{
        if(index==nums.length) return res = Math.max(res,length);
        if(nums[index]>path) recursion(nums[index],index+1,length+1);
        recursion(path,index+1,length);
    }
    recursion(-Infinity,0,0);
    return res;
};
//动态规划
var lengthOfLIS = function(nums) {
    let d = new Array(nums.length).fill(1),res=1;
    for(let i=1;i<nums.length;i++){
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j]){
                d[i] = Math.max(d[i],d[j]+1);
            }
        }
        res = Math.max(res,d[i]);
    }
    return res;
};