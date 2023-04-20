/**
 * @param {number} n
 * @return {string[]}
 */
//根据n-1推n
 var generateParenthesis = function(n) {
    let result = new Set(['()']),temp = new Set();
    for(let i=1;i<n;i++){
        for(let value of result){
            for(let j=0;j<=value.length;j++){
                temp.add(value.slice(0,j)+'()'+value.slice(j));
            }
        }
        result = temp;
        temp.clear;
    }
    return [...result];
};
//递归
/**
 * @param {number} n
 * @return {string[]}
 */
//根据n-1推n
var generateParenthesis = function(n) {
    let result = [];
    const addParentheses = (str,left,right)=>{
        if(left==0&&right==0){
            result.push(str);
            return;
        }
        if(left>0){
            addParentheses(str+'(',left-1,right);
        }
        if(left<right){
            addParentheses(str+')',left,right-1);
        }
    }
    addParentheses('',n,n);
    return result;
};
