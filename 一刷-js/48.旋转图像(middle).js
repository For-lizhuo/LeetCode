/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    let n = matrix[0].length,coor,next,temp;
    const nextPosition = ([x,y])=>[y,n-x-1];
    for(let round=0;round<~~(n/2);round++){
        for(let j=round;j<n-round-1;j++){
            coor = [round,j];
            temp = matrix[coor[0]][coor[1]];
            for(let k=1;k<=4;k++){
                next = nextPosition(coor);
                [matrix[next[0]][next[1]],temp] = [temp,matrix[next[0]][next[1]]];
                coor = [...next];
            }
        }
    }
};