/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    nums = nums.sort((a,b)=>a-b);
    let res = [],
        subnums = Array.from(new Set(nums));    
    let map = new Map();
    for(let value of nums){
        if(!map.get(value)){
            map.set(value,1);
        }
        else{
            map.set(value,map.get(value)+1)
        }
    }
    const recursion = (path,map)=>{
        if(path.length==nums.length){
            return res.push([...path]);
        }
        let current;
        for(let i=0;i<subnums.length;i++){
            current = subnums[i];
            if(map.get(current)){
                map.set(current,map.get(current)-1);
                path.push(current);
                recursion(path,map);
                path.pop();
                map.set(current,map.get(current)+1);
            }
        }
    }
    recursion([],map);
    return res;
};
console.log(permuteUnique([1,2,3]))