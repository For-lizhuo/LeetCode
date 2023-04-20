/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 var findSubstring = function(s, words) {
    let tool = {},res = [],wordsElemLength = words[0].length;
    for(let value of words){
        if(tool[value]==undefined){
            tool[value] = 1;
        }
        else{
            tool[value] += 1;
        }
    }
    for(let i=0;i<=s.length-wordsElemLength*words.length;i++){
        var count = 0;
        var begin = i;
        var toolCopy = {...tool};
        while(count<words.length){
            temp = s.slice(begin,begin+wordsElemLength);
            if(toolCopy[temp]){
                toolCopy[temp]--;
                count++;
                begin+=wordsElemLength;
            }
            else break;
        }
        if(count==words.length) res.push(i);
    }
    return res;
};
//暴力解，使用Map
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 var findSubstring = function(s, words) {
    let tool = new Map(),res = [],wordsElemLength = words[0].length;
    for(let value of words){
        if(tool.get(value)==undefined){
            tool.set(value,1);
        }
        else{
            tool.set(value,tool.get(value)+1);
        }
    }
    for(let i=0;i<=s.length-wordsElemLength*words.length;i++){
        var count = 0;
        var begin = i;
        var toolCopy = new Map(tool.entries());
        while(count<words.length){
            temp = s.slice(begin,begin+wordsElemLength);
            if(toolCopy.get(temp)){
                toolCopy.set(temp,toolCopy.get(temp)-1);
                count++;
                begin+=wordsElemLength;
            }
            else break;
        }
        if(count==words.length) res.push(i);
    }
    return res;
};
//滑动窗口
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 var findSubstring = function(s, words) {
    
};