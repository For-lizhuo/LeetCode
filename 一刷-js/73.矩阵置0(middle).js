/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    let setM = new Set(),setN = new Set(),m = matrix.length,n = matrix[0].length;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(!matrix[i][j]){
                setM.add(i);
                setN.add(j);
            }
        }
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(setM.has(i)||setN.has(j)){
                matrix[i][j]=0;
            }
        }
    }
    console.log(setM,setN)
};
setZeroes([[1,2,3,4],[5,0,7,8],[0,10,11,12],[13,14,15,0]])