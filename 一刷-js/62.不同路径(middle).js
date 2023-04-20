/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//递归超时
 var uniquePaths = function(m, n) {
    let path = new Set();
    const getPath = (subpath,m,n)=>{
        if(m==0&&n==0) return path.add(subpath);
        if(n!=0) getPath(subpath+'r',m,n-1);
        if(m!=0) getPath(subpath+'d',m-1,n);
    }
    getPath('',m-1,n-1);
    return path.size;
};
//公式推导
const Combination = (down,up)=>{
    let res = 1;
    for(let i=down,j=0;j<up;i--,j++){
        res *=i;
    }
    for(let i=up;i>=1;i--){
        res /=i;
    }
    return res;
}
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    return Combination(m+n-2,m-1);
};
//动态规划
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    let arr = new Array(m).fill(0).map(()=>new Array(n).fill(0));
    for(let i=0;i<n;i++) arr[0][i] = 1;
    for(let i=0;i<m;i++) arr[i][0] = 1;
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            arr[i][j] = arr[i-1][j]+arr[i][j-1];
        }
    }
    return arr[m-1][n-1];
};