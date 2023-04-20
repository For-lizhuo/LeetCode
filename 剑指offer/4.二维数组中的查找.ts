function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  let n:number = matrix.length;
  let m:number = matrix[0]?.length;
  if(!n||!m) return false;
  let i=0,j=m-1;
  while(i<n&&j>=0){
    if(target===matrix[i][j]) return true;
    else if(target>matrix[i][j]) i++;
    else j--;
  }
  return false;
};