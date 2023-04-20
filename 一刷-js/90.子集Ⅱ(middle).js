/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//利用78子集Ⅰ函数再去重
 var subsetsWithDup = function(nums) {
    nums = nums.sort((a,b)=>a-b);
    let res = [[]],temp;
    for(let i=0;i<nums.length;i++){
        temp = _.cloneDeep(res);
        for(let value of temp){
            value.push(nums[i]);
        }
        res = [...res,...temp];
    }
    let set = new Set();
    for(let i=0,n=res.length;i<n;i++){
        temp = res[i].join('');
        console.log(temp)
        if(set.has(temp)){
            res.splice(i,1);
            n--;
            i--;
        }
        else{
            set.add(temp);
        }
    }
    console.log(set)
    return res;
};

var subsetsWithDup = function(nums) {
    let res = [],path = [];
    nums = nums.sort((a,b)=>a-b);
    const backtrace = (start,path)=>{
        res.push([...path]);
        if(start>=nums.length) return;
        for(let i=start;i<nums.length;i++){
            if(i>start&&nums[i]==nums[i-1]) continue;
            path.push(nums[i]);
            backtrace(i+1,[...path]);
            path.pop();
        }
    }
    backtrace(0,path);
    return res;
};