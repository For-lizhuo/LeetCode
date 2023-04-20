/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let obj = {},res = [];
    for(let str of strs){
        sortedStr = str.split('').sort().join('');
        obj[sortedStr] = obj[sortedStr]?[...obj[sortedStr],str]:[str];
    }
    for(let key in obj){
        res.push(obj[key]);
    }
    return res;
};