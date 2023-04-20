var isValidSudoku = function(board) {
    let tool = new Set(),current;
    //判断行
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            current = board[i][j];
            if(current!='.'){
                if(tool.has(current)) return false;
                else tool.add(current);
            }        
        }
        tool.clear();
    }
    //判断列
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            current = board[j][i];
            if(current!='.'){
                if(tool.has(current)) return false;
                else tool.add(current);
            }
        }
        tool.clear();
    }
    const isValid = (i,j,board)=>{
        let tool = new Set(),current;
        for(let k=i;k<i+3;k++){
            for(let l=j;l<j+3;l++){
                current = board[k][l];
                if(current!='.'){
                    if(tool.has(current)) return false;
                    else tool.add(current);
                }
            }
        }
        return true;
    }
    //判断所有3*3
    for(let i=0;i<=6;i+=3){
        for(let j=0;j<=6;j+=3){
            if(!isValid(i,j,board)){
                return false;
            }
        }
    }
    return true;
};
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
    let num = 0,res;
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(board[i][j]!='.')num++;
        }
    }
    const findDot = (board,pre)=>{
        for(let i=pre;i<9;i++){
            for(let j=0;j<9;j++){
                if(board[i][j]=='.') return [i,j];
            }
        }
    }
    const backtrace = (board,num,pre)=>{
        if(num==81) return res = [...board];
        let cur = [...findDot(board)];
        let temp = [...board];
        for(let i=1;i<=9;i++){      
            temp[cur[0]][cur[1]] = i+'';   
            if(isValidSudoku(temp)){ 
                backtrace(_.cloneDeep(temp),num+1,cur[0]);
            }
        }
        return;
    }
    backtrace(board,num,0);
    for(let i=0;i<9;i++){
        board[i] = res[i];
    }
};