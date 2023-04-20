/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length,n = obstacleGrid[0].length;
    let arr = new Array(m).fill(0).map(()=>new Array(n).fill(0));
    if(obstacleGrid[0][0]==1) return 0;
    arr[0][0] = 1;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(obstacleGrid[i][j]==0){
                if(i&&j){
                    arr[i][j] = arr[i-1][j]+arr[i][j-1];
                }
                else if(i&&!j){
                    arr[i][j] = arr[i-1][j];
                }
                else if(!i&&j){
                    arr[i][j] = arr[i][j-1];
                }
            }    
        }
    }
    return arr[m-1][n-1];
};