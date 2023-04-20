/**
 * @param {number[]} nums
 * @return {number}
 */
//使用辅助数组依次记录到达当前位置需要的最小跳跃次数
 var jump = function(nums) {
    let step = new Array(nums.length).fill(0),j=1;
    for(let i=0;i<nums.length-1;i++){
        for(;j<i+1+nums[i]&&j<nums.length;j++){
            step[j] = step[i]+1;
        }
    }
    return step[step.length-1]
};

/**
 * @param {number[]} nums
 * @return {number}
 */
//贪心算法，局部最优->全局最优
var jump = function(nums) {
    let max=0,end=0,step=0;
    for(let i=0;i<nums.length-1;i++){
        max = Math.max(max,i+nums[i]);
        if(i==end){
            step ++;
            end = max;
        }
    }
    return step;
};