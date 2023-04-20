/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//官解，回溯法
 var combinationSum = function(candidates, target) {
    let res = [];
    const dfs = (target,combine,index)=>{
        if(index==candidates.length) return;
        if(target==0) return res.push(combine);
        dfs(target,combine,index+1);
        if(target-candidates[index]>=0){
            dfs(target-candidates[index],[...combine,candidates[index]],index);
        }
    }
    dfs(target,[],0);
    return res;
};