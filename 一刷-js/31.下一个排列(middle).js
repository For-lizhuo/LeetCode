/**
 * @param  {number[]} nums
 * @param  {number} head
 * @param  {number} tail
 */
 const increase = (nums,head,tail)=>{
    let temp = nums.slice(head,tail+1);
    temp.sort((a,b)=>a-b);
    for(let j=0,i=head;i<=tail;i++,j++){
        nums[i] = temp[j]; 
    }
    return;
}
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    let pos=-1,i=nums.length-1,min,loc;
    while(i>0){
        if(nums[i]>nums[i-1]) {
            min = nums[i];
            loc = i;
            pos = i-1;
            break;
        }
        else{
            i--;
        }
    }
    if(pos!=-1){
        i=nums.length-1;
        while(i>pos){
            if(nums[i]>nums[pos]){
                min = nums[i]<min?(loc=i,nums[i]):min;
            }
            i--;
        }
        [nums[pos],nums[loc]] = [nums[loc],nums[pos]];
        
    }
    return increase(nums,pos+1,nums.length-1);
};