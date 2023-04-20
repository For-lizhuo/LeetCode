/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
    let res = [...new Array(n)].map(()=>new Array(n).fill(0)),current,k=1;
    for(let i=0;i*2<n;i++){
        next = [0,0,0,0];
        for(let j=i;j<n-i;j++){
            current = [i,j];
            res[i][j] = k;
            k++;
            next[1]=1;
        }
        for(let j=i+1;j<n-i&&next[1];j++){
            current = [j,n-i-1];
            res[j][n-i-1] = k;
            k++;
            next[2]=1;
        }
        for(let j=n-i-2;j>i-1&&next[2];j--){
            current = [n-i-1,j];
            res[n-i-1][j] = k;
            k++;
            next[3]=1;
        }
        for(let j=n-i-2;j>i&&next[3];j--){
            current = [j,i];
            res[j][i] = k;
            k++;
        }
    }
    return res;
};