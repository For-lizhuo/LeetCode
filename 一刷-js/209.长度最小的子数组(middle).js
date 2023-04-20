/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
//暴力递归
 var minSubArrayLen = function(target, nums) {
    let res = 0;
    const recursion = (path,sum,index,begin)=>{
        if(sum>=target){
            return res = (res==0?path:Math.min(path,res));
        }
        if(!res&&path>res) return;
        if(index>=nums.length) return;
        if(!begin){
            recursion(path,sum,index+1,false);
        }
        recursion(path+1,sum+nums[index],index+1,true);
    }  
    recursion(0,0,0,false);
    return res;
};
//滑动窗口
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let head = 0,tail = 0, res = Infinity,sum = 0;
    while(tail<nums.length){
        sum += nums[tail];
        while(sum>=target){
            res = Math.min(res,tail-head+1);
            sum -= nums[head];
            head++;
        }
        tail++;
    }
    return res==Infinity?0:res;
};