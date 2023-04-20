/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if(!digits) return [];
    const reflect = {
        2:['a','b','c'],
        3:['d','e','f'],
        4:['g','h','i'],
        5:['j','k','l'],
        6:['m','n','o'],
        7:['p','q','r','s'],
        8:['t','u','v'],
        9:['w','x','y','z']
    };
    let result = reflect[digits[0]],current,temp = [];
    for(let i=1;i<digits.length;i++){
        current = reflect[digits[i]];
        current.map(value=>{
            for(let j=0;j<result.length;j++){
                temp.push(result[j]+value)
            }
        })
        result = temp;
        temp = [];
    }
    return result;
};