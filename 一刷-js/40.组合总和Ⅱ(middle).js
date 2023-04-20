/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    let res = [],
        tool = new Map();
    for(let value of candidates){
        if(!tool.get(value)){
            tool.set(value,1);
        }
        else{
            tool.set(value,tool.get(value)+1);
        }
    }
    candidates = Array.from(new Set(candidates));
    const getNum =(array,target)=>{
        let res = 0
        for(let value of array){
            res = value==target?res+1:res;
        }
        return res;
    } 
    const dfs = (target,combine,index)=>{
        if(index==candidates.length) return;
        if(target==0) return res.push(combine);
        dfs(target,combine,index+1);
        let current = candidates[index];
        if(target-current>=0&&getNum(combine,current)<=tool.get(current)-1){
            dfs(target-current,[...combine,current],index);
        }
    }
    dfs(target,[],0);
    return res;
};
console.log(combinationSum2([10,1,2,7,6,1,5],8))