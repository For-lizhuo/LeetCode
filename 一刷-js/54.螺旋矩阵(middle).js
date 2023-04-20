/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    let res = [],m = matrix.length,n = matrix[0].length,current,next;
    for(let i=0;i*2<Math.min(m,n);i++){
        next = [0,0,0,0];
        for(let j=i;j<n-i;j++){
            current = [i,j];
            res.push(matrix[current[0]][current[1]]);
            next[1]=1;
        }
        for(let j=i+1;j<m-i&&next[1];j++){
            current = [j,n-i-1];
            res.push(matrix[current[0]][current[1]]);
            next[2]=1;
        }
        for(let j=n-i-2;j>i-1&&next[2];j--){
            current = [m-i-1,j];
            res.push(matrix[current[0]][current[1]]);
            next[3]=1;
        }
        for(let j=m-i-2;j>i&&next[3];j--){
            current = [j,i];
            res.push(matrix[current[0]][current[1]]);
        }
    }
    return res;
};
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))