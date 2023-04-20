// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
// 假设环境不允许存储 64 位整数（有符号或无符号）。
// 示例 1：
// 输入：x = 123
// 输出：321
// 示例 2：
// 输入：x = -123
// 输出：-321
// 示例 3：
// 输入：x = 120
// 输出：21
// 示例 4：
// 输入：x = 0
// 输出：0
// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/reverse-integer
/**
 * @param {number} x
 * @return {number}
 */
//运用JS内置的数组和字符串方法
var reverse = function(x) {
    let string = x+'';
    if(x<0) string = string.slice(1);
    let temp = string.split('').reverse().join('');
    let result = Number(temp);
    if(x<0&&result<2**31) return -result;
    else if(x>0&&result<2**31-1)return result;
    return 0;
};
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    while(x!=0){
        result = result*10+x%10;
        x = ~~(x/10);
    }
    if(result>2**31-1||result<-(2**31)){
        return 0;
    }
    return result;
};