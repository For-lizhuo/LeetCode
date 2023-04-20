/**
 * @param {number[]} nums
 * @return {boolean}
 */
//递归超时
 var canJump = function(nums) {
    let res = false;
    const recursion = (index,limit)=>{
        if(limit==0) return;
        for(let i=limit;i>=1;i--){
            if(index+i>=nums.length-1){
                return res=true;
            }
            recursion(index+i,nums[index+i]);
        }
    }
    recursion(0,nums[0]);
    return nums.length==1?true:res;
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let canReach = 0, reach=0;
    for(let i=0;i<nums.length-1;i++){
        reach = nums[i]+i;
        if(i>canReach) break;
        if(reach>=nums.length-1){
            canReach = reach;
            break;
        }
        if(reach>canReach) canReach = reach;    
    }
    return canReach>=nums.length-1?true:false;
};
console.log(canJump([0,2,3]))