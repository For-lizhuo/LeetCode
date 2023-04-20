/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//找到一个target后，向两边扩散
 var searchRange = function(nums, target) {
    let head = 0,tail = nums.length-1,middle,index=-1,res=[];
    while(head<=tail){
        middle = ~~((head+tail)/2);
        if(nums[middle]==target) {
            index = middle;
            break;
        }
        else if(nums[middle]<target){
            head = middle+1;
        }
        else{
            tail = middle-1;
        }
    }
    if(index==-1) return [-1,-1];
    let left = index,right = index;
    while(left>0){
        if(nums[left-1]==target) left--;
        else break;
    }
    res.push(left);
    while(right<nums.length-1){
        if(nums[right+1]==target) right++;
        else break;
    }
    res.push(right);
    return res;
};

const binarySearch = (nums,target,type)=>{
    let head = 0,tail = nums.length-1,middle,res = nums.length;
    while(head<=tail){
        middle = ~~((head+tail)/2);
        if((type&&nums[middle]>=target)||(!type&&nums[middle]>target)){
            res = middle;
            tail = middle-1;
        }
        else{
            head = middle+1;
        }
    }
    return res;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//分别找到大于等于target的第一个数和大于target的第一个数
 var searchRange = function(nums, target) {
    let res = [-1,-1],
        head = binarySearch(nums,target,true),
        tail = binarySearch(nums,target,false)-1;
    if(head>=0&&tail<nums.length&&head<=tail&&nums[head]==target&&nums[tail]==target){
        res = [head,tail];
    }
    return res;
};