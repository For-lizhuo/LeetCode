/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function(dividend, divisor) {
    let signal = dividend*divisor>0?1:-1,res = 0,power=0;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    while(dividend>=divisor){
        var temp = Math.abs(divisor);
        while(dividend>(temp<<power)){
            if(temp<<power<0){
                break;
            }
            power++;        
        }
        temp = Math.abs(divisor<<((power-1)<0?0:power-1));
        dividend = dividend-temp;
        res += 1<<((power-1)<0?0:power-1);
        power=0;
    }
    return (res*signal>=-(2**31)&&res*signal<=2**31-1)?res*signal:2**31-1;
};