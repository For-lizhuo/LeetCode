/**
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
    let map = new Map();
    map.set(0,0)
    map.set(1,1);
    map.set(2,2);
    for(let i=3;i<=n;i++){
        var temp=0;
        for(let j=1;j<=i;j++){
            temp = temp+map.get(j-1)+map.get(i-j);
        }
        map.set(i,temp);
    }
    return map.get(n);
};