/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    let res = false,m = board.length,n = board[0].length;
    const recursion = (pre,index,set)=>{
        let target = word[index];
        if(index==word.length) return res=true;
        else if(index==0){
            let arr = [];
            for(let i=0;i<m;i++){
                for(let j=0;j<n;j++){
                    if(board[i][j]==target){
                        arr.push([i,j]);
                    }
                }
            }
            for(let i=0;i<arr.length;i++){
                recursion([...arr[i]],index+1,new Set([arr[i][0]+''+arr[i][1]]));
            }
        }
        else{
            let arr = [[pre[0]+1,pre[1]],[pre[0]-1,pre[1]],[pre[0],pre[1]+1],[pre[0],pre[1]-1]],
                next = [];
            for(let value of arr){
                if(value[0]>=0&&value[0]<m&&value[1]>=0&&value[1]<n&&board[value[0]][value[1]]==target&&!set.has(value[0]+''+value[1])){
                    next.push([value[0],value[1]])
                }
            }
            if(next.length){
                for(let i=0;i<next.length;i++){
                    var temp = Array.from(set);
                    temp.push(next[i][0]+''+next[i][1]);
                    recursion([...next[i]],index+1,new Set(temp));
                }
            }
            else return;
        }
    }
    recursion([],0,new Set());
    return res;
};