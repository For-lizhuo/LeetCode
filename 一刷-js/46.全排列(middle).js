/**
 * @param  {number} num
 * @param  {number[][]} seq
 */
//迭代
 const iteration=(num,seq)=>{
    if(seq.length==0) return[[num]];
    let res = [],temp;
    for(let i=0;i<seq.length;i++){        
        for(let j=0;j<=seq[i].length;j++){
            temp = [...seq[i].slice(0,j),num,...seq[i].slice(j)];
            res.push(temp);
        }
    }
    return res;
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let res=[];
    for(let value of nums){
        res = iteration(value,res);
    }
    return res;
};
//递归
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let res=[];
    /**
     * @param  {number[]} path
     * @param  {Set} set
     */
    const recursion = (path,set)=>{
        if(path.length==nums.length){
            return res.push([...path]);
        }
        for(let i=0;i<nums.length;i++){
            if(!set.has(nums[i])){
                path.push(nums[i]);
                set.add(nums[i]);
                recursion(path,set);
                path.pop();
                set.delete(nums[i]);
            }
        }
    }
    recursion([],new Set());
    return res;
};
console.log(permute([1, 2, 3]));