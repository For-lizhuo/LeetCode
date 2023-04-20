/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//分块查找+二分查找
 var searchMatrix = function(matrix, target) {
    let line = 1,m = matrix.length,n = matrix[0].length;
    if(target<matrix[0][0]||target>matrix[m-1][n-1]) return false;
    while(line<m&&target>=matrix[line][0]){
        line++;
    }
    line--;
    const binarySearch = (arr,target)=>{
        let l=0,r=arr.length-1;
        while(l<=r){
            mid = l+((r-l)>>1);
            if(arr[mid]==target) return true;
            else if(arr[mid]>target) r = mid-1;
            else l=mid+1;
        }
        return false;
    }
    return binarySearch(matrix[line],target);
};
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],6))