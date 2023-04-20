/**
 * @param {number} n
 * @return {string[][]}
 */
 var totalNQueens = function(n) {
    let string = (new Array(n).fill('*')).join('');
    let arr = [...new Array(n)].map(()=>string.concat()),res = 0;
    const judge = (i,j,arr)=>{
        for(let p=0;p<n;p++){
            for(let q=0;q<n;q++){
                if(p==i||q==j||Math.abs(p-i)==Math.abs(q-j)){
                    arr[p] = arr[p].slice(0,q)+'.'+arr[p].slice(q+1);
                }
            }
        }
    }
    const backtrace = (arr,num,pre)=>{
        if(num==n) res++;
        for(let i=(pre==null?0:pre[0]+1);i<n;i++){
            for(let j=0;j<n;j++){
                if(arr[i][j]=='*'){
                    var temp = _.cloneDeep(arr);
                    judge(i,j,temp);
                    temp[i] = temp[i].slice(0,j)+'Q'+temp[i].slice(j+1);
                    backtrace([...temp],num+1,[i,j]);
                }
            }
        }
    }
    backtrace(arr,0,null);
    return res;
};