/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 var search = function(nums, target) {
    let res = [false];
    const binarySearch = (left,right,target)=>{
        let mid = left + ((right-left)>>1);
        if(nums[left]<=nums[right]){
            while(left<=right){
                mid = left + ((right-left)>>1);
                if(nums[mid]==target) return res[0]=true;
                else if(nums[mid]>target) right = mid-1;
                else left = mid+1;
            }
            return;
        }
        else{
            binarySearch(left,mid-1,target);
            binarySearch(mid+1,right,target);
        }
    }
    binarySearch(0,nums.length-1,target);
    return res[0];
};