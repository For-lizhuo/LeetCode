/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    let sup=[0,0,0],i=0;
    for(let value of nums){
        sup[value]++;
    }
    for(let j=1;j<=sup[0];j++,i++){
        nums[i]=0;
    }
    for(let j=1;j<=sup[1];j++,i++){
        nums[i]=1;
    }
    for(let j=1;j<=sup[2];j++,i++){
        nums[i]=2;
    }
};