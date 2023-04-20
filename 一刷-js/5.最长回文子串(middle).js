// 给你一个字符串 s，找到 s 中最长的回文子串。
// 示例 1：
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：
// 输入：s = "cbbd"
// 输出："bb"
// 提示：
// 1 <= s.length <= 1000
// s 仅由数字和英文字母组成
// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/longest-palindromic-substring
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length<2) return s;
    let subString = '',maxString = '', max = 0, length = 0;
    let spread = function(p1,p2){
        while(p1>=0&&p2<=s.length&&s[p1]==s[p2]){            
            p1--;
            p2++;
        }
        subString = s.slice(p1+1,p2);
        maxString = maxString.length>subString.length?maxString:subString;
    }
    for(let i=0;i<s.length;i++){
        spread(i,i);
        spread(i,i+1);
    }
    return maxString;
};

