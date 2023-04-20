/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(haystack.length<needle.length)return -1;
    for(let i=0;i<=haystack.length-needle.length;i++){
        var j=i,k=0;
        while(k<needle.length){
            if(haystack[j]==needle[k]){
                j++;k++;
            }
            else break;
        }
        if(k==needle.length) return i;
    }
    return -1;
};
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};