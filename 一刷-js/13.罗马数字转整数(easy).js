/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const tool = new Map([['I',1],['V',5],['X',10],['L',50],['C',100],['D',500],['M',1000]]);
    let i = 0,result = 0;
    while(i<s.length){
        if(i == s.length-1){
            result += tool.get(s[i]);
            return result;
        }
        if(tool.get(s[i])<tool.get(s[i+1])){
            result = result+tool.get(s[i+1])-tool.get(s[i]);
            i+=2;continue;
        }
        result+=tool.get(s[i]);
        i++;
    }
    return result;
};