const DIRECTION = [
  [0,1],[1,0],[0,-1],[-1,0]
]
function spiralOrder(matrix: number[][]): number[] {
  let m = matrix.length,n = matrix[0]?.length,direction = 0;
  if(!m||!n) return [];
  const isValid = (point:number[]):boolean=>{
    const [x,y] = [...point];
    if(x<0||x>=m||y<0||y>=n) return false;
    if(matrix[x][y]===Infinity) return false; 
    return true;
  }
  let res = new Array<number>(m*n);
  for(let k=0,i=0,j=0;k<res.length;k++){
    res[k] = matrix[i][j];
    matrix[i][j] = Infinity;
    if(!isValid([i+DIRECTION[direction][0],j+DIRECTION[direction][1]])){
      direction = (direction+1)%4;
    }
    [i,j] = [i+DIRECTION[direction][0],j+DIRECTION[direction][1]];
  }
  return res;
};