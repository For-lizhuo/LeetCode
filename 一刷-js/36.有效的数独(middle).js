/**
 * @param  {number} i
 * @param  {number} j
 * @param  {character[][]} board
 *///判断单个3*3
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
/**
 * @param {character[][]} board
 * @return {boolean}
 */
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