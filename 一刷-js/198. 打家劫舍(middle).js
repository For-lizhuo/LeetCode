/**
 * @param {number[]} nums
 * @return {number}
 */
//递归超时
 var rob = function(nums) {
    let res = 0;
    const recursion = (path,index)=>{
        if(index>=nums.length){
            return res = Math.max(res,path);
        }
        recursion(path+nums[index],index+2);
        recursion(path,index+1);
    }
    recursion(0,0);
    return res;
};
//动态规划
var rob = function(nums) {
    if(nums.length==1) return nums[0];
    if(nums.length==2) return Math.max(nums[0],nums[1]);
    let temp1 = nums[0],temp2 = Math.max(nums[0],nums[1]);
    for(let i=2;i<nums.length;i++){
            [temp1,temp2] = [temp2,Math.max(temp1+nums[i],temp2)]
    }
    return temp2;
};