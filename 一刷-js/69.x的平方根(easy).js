/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    let res = 1;
    while(res*res<=x){
        res++;
    }
    return res-1;
};