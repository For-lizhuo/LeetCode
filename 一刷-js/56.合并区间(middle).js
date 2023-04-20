/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    if(intervals.length==1) return intervals;
    intervals.sort((a,b)=>a[0]-b[0]);
    let res = [intervals[0]],pre,cur;
    for(let i=1;i<intervals.length;i++){
        pre = res[res.length-1];
        cur = intervals[i];
        if(cur[0]<=pre[1]&&cur[1]>pre[1]){
            cur = [pre[0],cur[1]];
            res.pop();
        }
        else if(cur[0]>=pre[0]&&cur[1]<=pre[1]){
            continue;
        }
        res.push(cur);
    }
    return res;
};