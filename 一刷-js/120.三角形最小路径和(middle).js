/**
 * @param {number[][]} triangle
 * @return {number}
 */
//递归超时
 var minimumTotal = function(triangle) {
    if(triangle.length==1) return triangle[0][0];
    const recursion = (line,index1,index2)=>{
        if(line==triangle.length) return 0;
        return Math.min(recursion(line+1,index1,index1+1)+triangle[line][index1],recursion(line+1,index2,index2+1)+triangle[line][index2]);
    }
    return triangle[0][0]+recursion(1,0,1);
};
//动态规划
var minimumTotal = function(triangle) {
    if(triangle.length==1) return triangle[0][0];
    let n = triangle.length;
    let arr = new Array(n).fill(Infinity);
    arr[0] = triangle[0][0];
    for(let i=2;i<=n;i++){ 
        for(let j=i-1;j>=0;j--){
            if(j==0) arr[j] += triangle[i-1][j];
            else if(j==i-1) arr[j] = arr[j-1]+triangle[i-1][j];
            arr[j] = Math.min(arr[j],arr[j-1])+triangle[i-1][j];
        }
    }
    return Math.min([...arr]);
};