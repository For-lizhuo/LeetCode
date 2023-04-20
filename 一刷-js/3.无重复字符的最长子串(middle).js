// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
// 示例 1:
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:
// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:
// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/longest-substring-without-repeating-characters
/**
 * @param {string} s
 * @return {number}
 */
//使用两个指针和Set，当尾指针所指的字符在Set中出现时，令头指针向后移动
//时间复杂度0(s.length)
var lengthOfLongestSubstring = function(s) {
    if(s.length<=1){
        return s.length;
    }
    else if(s.length==2&&s[0]==s[1]){
        return 1;
    }
    let tool = new Set();
    let pointer1 = 0, pointer2 = 1, max = 1,length = 1;
    tool.add(s[pointer1]);
    while(pointer2<s.length){
        if(!tool.has(s[pointer2])){
            max = Math.max(max,++length);
            tool.add(s[pointer2++]);
        }
        else{
            while(s[pointer1]!=s[pointer2]){
                tool.delete(s[pointer1]);
                length--;
                pointer1++;
            }
            if(pointer1<pointer2){
                pointer1++;
                pointer2++;
            }
            else if(pointer1==pointer2){
                pointer2++;
            }
        }
    }
    return max;
};