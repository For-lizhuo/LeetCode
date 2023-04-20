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
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
    let ins = intervals.length;
    for(let i=0;i<intervals.length;i++){
        if(intervals[i][0]>newInterval[0]){
            ins = i;
            break;
        }
    }
    intervals.splice(ins,0,newInterval);
    return merge(intervals);
};
console.log(insert([[ 1, 2 ], [ 3, 5 ], [ 6, 7 ], [ 8, 10 ], [ 12, 16 ]],[4,8]))
