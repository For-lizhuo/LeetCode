function numIslands(grid: string[][]): number {
  let res = 0;
  const dfs = (i,j):void=>{
    if(i<0||j<0||i>=grid.length||j>=grid[0].length||grid[i][j]==='0'){
      return;
    }
    grid[i][j] = '0';
    dfs(i+1,j);
    dfs(i-1,j);
    dfs(i,j+1);
    dfs(i,j-1);
  }
  for(let i=0;i<grid.length;i++){
    for(let j=0;j<grid[0].length;j++){
      if(grid[i][j]==='1'){
        res++;
        dfs(i,j);
      }
    }
  }
  return res;
};