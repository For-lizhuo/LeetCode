// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
// 算法的时间复杂度应该为 O(log (m+n)) 。
// 示例 1：
// 输入：nums1 = [1,3], nums2 = [2]
// 输出：2.00000
// 解释：合并数组 = [1,2,3] ，中位数 2
// 示例 2：
// 输入：nums1 = [1,2], nums2 = [3,4]
// 输出：2.50000
// 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
// 提示：
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106
// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/median-of-two-sorted-arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//创建一个数组用于保存两个数组合并后的结果，使用两个指针分别指向数组的首部，每次进行比较
//将较小的元素存入数组中，同时指针右移，重复执行，最后查找经过合并后的数组的中位数
//时间复杂度0(nums1.length+nums2.length) 空间复杂度0(nums1.length+nums2.length)
var findMedianSortedArrays = function(nums1, nums2) {
    let pointer1 = 0,pointer2 = 0,totalLength = nums1.length + nums2.length,i=0;
    let array = new Array(totalLength).fill(0);
    while(pointer1!=nums1.length&&pointer2!=nums2.length){
        array[i++] = nums1[pointer1]<nums2[pointer2]?nums1[pointer1++]:nums2[pointer2++];
    }
    while(pointer1!=nums1.length){
        array[i++] = nums1[pointer1++];
    }
    while(pointer2!=nums2.length){
        array[i++] = nums2[pointer2++];
    }    
    if(totalLength%2==1){
        return array[(totalLength+1)/2-1];
    }
    else{
        return (array[totalLength/2]+array[totalLength/2-1])/2;
    }
};