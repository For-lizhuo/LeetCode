function exist(board: string[][], word: string): boolean {
  const m = board.length,n = board[0].length;
  const func = (i:number,j:number,index:number):boolean=>{
    if(i<0||j<0||i===m||j===n||board[i][j]!==word[index]){
      return false;
    } 
    else if(index===word.length-1){
      return true;
    } 
    else{
      board[i][j] = '';
      let res:boolean;
      res = func(i+1,j,index+1)||func(i-1,j,index+1)||func(i,j+1,index+1)||func(i,j-1,index+1);
      board[i][j] = word[index];
      return res;
    }
  }
  for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
      if(func(i,j,0)){
        return true;
      }
    }
  }
  return false;
};