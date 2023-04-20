/**
 * @param {string[]} strs
 * @return {string}
 */
//纵向扫描
 var longestCommonPrefix = function(strs) {
    let result = '',example = strs[0],current='';
    for(let i=0;i<example.length;i++){
        current = example[i];
        for(let j=0;j<strs.length;j++){
            if(!strs[j][i]||strs[j][i]!=current){
                return result;
            }
        }
        result += current;
        console.log('result',result)
    }
    return result;
};
/**
 * @param {string[]} strs
 * @return {string}
 */
//排序后，比较首尾
var longestCommonPrefix = function(strs) {
    strs = strs.sort((a,b)=>a.localeCompare(b))
    let head = strs[0],tail = strs[strs.length-1];
    console.log(head,tail);
    let result = '';
    for(let i=0;i<head.length;i++){
        if(head[i]!=tail[i]||!tail[i])return result;
        result+=head[i];
    }
    return result;
};
