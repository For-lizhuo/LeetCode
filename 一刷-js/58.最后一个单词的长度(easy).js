/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let res = 0,i=s.length-1;
    while(!res||s[i]!=' '&&i>=0){
        if(s[i]!=' ')res++;
        i--;
    }
    return res;
};