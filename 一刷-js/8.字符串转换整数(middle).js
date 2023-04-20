// 请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。
// 函数 myAtoi(string s) 的算法如下：
// 读入字符串并丢弃无用的前导空格
// 检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
// 读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
// 将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
// 如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于 231 − 1 的整数应该被固定为 231 − 1 。
// 返回整数作为最终结果。
// 注意：
// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/string-to-integer-atoi
/**
 * @param {string} s
 * @return {number}
 */
//利用parseInt()函数
 var myAtoi = function(s) {
    let result = isNaN(parseInt(s))?0:parseInt(s);
    if(result>2**31-1)return 2**31-1;
    else if(result<-(2**31))return -(2**31);
    return result;
};
/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let char = s.split('');
    let i = 0,signal = '',result = 0,start = 0;
    while(i<s.length){
        if(char[i]==' '&&start==0) {
            i++;continue;
        }
        if(char[i]=='+'&&signal==''&&start==0) {
            signal = '+';i++;start = 1;continue;
        }
        else if(char[i]=='-'&&signal==''&&start==0) {
            signal = '-';i++;start = 1;continue
        }
        else if(isFinite(char[i])&&char[i]!=' '){
            start = 1;
            result = result*10+Number(char[i]);
            i++;continue;
        }
        else break;
    }
    if(signal=='-') result = -result;
    result = result>2**31-1?2**31-1:result;
    result = result<-(2**31)?-(2**31):result;
    return result;
};