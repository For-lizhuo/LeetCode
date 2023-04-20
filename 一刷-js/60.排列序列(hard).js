/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
//递归法
 var getPermutation = function(n, k) {
    let arr = []
    const recursion = (path,set)=>{
        if(path.length==n) return arr.push(path);
        for(let i=1;i<=n;i++){
            if(!set.has(i)){
                set.add(i);
                recursion(path+i,set);
                set.delete(i);
            }
        }
    }
    recursion('',new Set);
    return res[k-1]
};
//迭代:超时
var getPermutation = function(n, k) {
    let arr = ['1'],temp=[],cur;
    for(let i=2;i<=n;i++){
        for(let j=0;j<arr.length;j++){
            cur = arr[j];
            for(let m=0;m<=cur.length;m++){
                temp.push(cur.slice(0,m)+i+cur.slice(m));
            }
        }
        arr = [...temp];
        temp = [];
    }
    return(arr.sort()[k-1])
};