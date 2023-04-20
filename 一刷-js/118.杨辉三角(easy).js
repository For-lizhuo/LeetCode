/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let res = [[1]],temp;
    for(let i=2;i<=numRows;i++){
        temp = new Array(i).fill(1);
        for(let j=1;j<i-1;j++){
            temp[j] = res[i-2][j-1]+res[i-2][j];
        }
        res.push([...temp]);
    }
    return res;
};