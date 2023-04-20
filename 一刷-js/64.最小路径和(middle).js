/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length;
    let path = new Array(n).fill(0);
    path[0] = grid[0][0];
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(j&&i){
                path[j] = Math.min(path[j-1],path[j])+grid[i][j];
            }
            else if(j&&!i){
                path[j] = path[j-1]+grid[i][j];
            }
            else if(!j&&i){
                path[j] += grid[i][j];
            }
             console.log(path[j])
        }
    }
    return path[n-1];
};