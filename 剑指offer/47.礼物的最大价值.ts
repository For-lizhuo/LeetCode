// 递归遍历超时
// function maxValue(grid: number[][]): number {
//   let m = grid.length,n = grid[0].length,max = 0;
//   const recursion = (value:number,i:number,j:number):void=>{
//     if(i===m-1&&j===n-1){
//       max = Math.max(value+grid[i][j],max);
//       return;
//     }
//     if(i<m-1) recursion(value+grid[i][j],i+1,j);
//     if(j<n-1) recursion(value+grid[i][j],i,j+1);
//   }
//   recursion(0,0,0);
//   return max;
// };
//动态规划
function maxValue(grid: number[][]): number {
  let m = grid.length,n = grid[0].length;
//初始化第一行和第一列
  for(let i=0,j=0;i<m;i++){
    if(i===0) continue;
    grid[i][j] += grid[i-1][j];
  }
  for(let i=0,j=0;j<n;j++){
    if(j===0) continue;
    grid[i][j] += grid[i][j-1];
  }
//依次得到达某个坐标时的最大值
  for(let i=1;i<m;i++){
    for(let j=1;j<n;j++){
      grid[i][j] += Math.max(grid[i-1][j],grid[i][j-1]);
    }
  }
  return grid[m-1][n-1];
};