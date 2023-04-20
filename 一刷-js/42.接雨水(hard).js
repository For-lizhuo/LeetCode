/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let left = new Array(height.length).fill(0),
        right = new Array(height.length).fill(0),
        res = new Array(height.length).fill(0),sum = 0;
    for(let i=0,max=0;i<height.length;i++){
        left[i] = max;
        max = height[i]>max?height[i]:max;
    }
    for(let i=height.length-1,max=0;i>=0;i--){
        right[i] = max;
        max = height[i]>max?height[i]:max;
    }
    for(let i=0;i<height.length;i++){
        if(height[i]>=left[i]||height[i]>=right[i])continue;
        res[i] = Math.min(left[i]-height[i],right[i]-height[i]);
    }
    for(let value of res){
        sum+=value;
    }
    return sum;
};