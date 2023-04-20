/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    let res = [];
    const recursion = (path)=>{
        if(path.length==k) return res.push([...path]);
        else if(path.length==0){
            for(let i=1;i<=n-k+1;i++){
                recursion([i])
            }
        }
        else{
            for(let i=path[path.length-1]+1;i<=n-(k-path.length)+1;i++){
                recursion([...path,i]);
            }
        }
    }
    recursion([]);
    return res;
};