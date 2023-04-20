/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    return Array.from(s).sort().join('')==Array.from(t).sort().join('');
};
var isAnagram = function(s, t) {
    let map = new Map();
    for(let value of s){
        if(map.get(value)){
            map.set(value,map.get(value)+1);
        }
        else{
            map.set(value,1);
        }
    }
    for(let value of t){
        if(map.get(value)){
            map.get(value)==1?map.delete(value):map.set(value,map.get(value)-1);
        }
        else{
            return false;
        }
    }
    return !!!map.size();
};