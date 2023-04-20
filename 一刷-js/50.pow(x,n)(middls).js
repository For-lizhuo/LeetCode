/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    if(n<0) return myPow(1/x,-n);
    if(n==0) return 1;
    if(n==1) return x;
    if(n==2) return x*x;
    if(n>2&&n%2==0) return myPow(myPow(x,n/2),2);
    if(n>2&&n%2==1) return myPow(myPow(x,(n-1)/2),2)*x;
};
console.log(myPow(2,10))