/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let tail = digits.length-1;
    digits[tail] = digits[tail]+1;
    while(digits[tail]>=10&&tail>=0){
        digits[tail]-=10;
        if(tail){
            digits[tail-1]++;
        }
        else{
            digits.unshift(1);
        }
        tail--;
    }
    return digits;
};
//Number溢出
/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    return Number(digits.join(''))+1+''.split('');
};
//BigInt
/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    return BigInt(digits.join(''))+1n+''.split('').pop();
};