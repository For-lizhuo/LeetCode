// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。
// 示例 1：
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
// 示例 2：
// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]
// 示例 3：
// 输入：nums = [3,3], target = 6
// 输出：[0,1]
// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/two-sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//暴力解，时间复杂度0(N^2)
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return [i,j];
            }
        }
    }
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//使用Map，时间复杂度O(N)，空间复杂度O(N)
var twoSum = function(nums, target) {
    let tool = new Map();
    for(let i=0;i<nums.length;i++){
        var gap = target-nums[i];
        if(tool.get(gap)!=undefined){
            return [i,tool.get(gap)];
        }
        tool.set(nums[i],i);
    }
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//使用对象，时间复杂度O(N)，空间复杂度O(N)
var twoSum = function(nums, target) {
    let tool = {};
    for(let i=0;i<nums.length;i++){
        var gap = target-nums[i];
        if(tool[gap]!=undefined){
            return [i,tool[gap]];
        }
        tool[nums[i]] = i;
    }
};