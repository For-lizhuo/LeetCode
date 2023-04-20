const deleteZero = (str)=>{
    let i=0;
    while(str[i]=='0'&&i<str.length){
        i++;
    }
    return str.slice(i);
}
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {
    if(num1=='0'||num2=='0') return '0';
    let arr1 = num1.split('').reverse(),
        arr2 = num2.split('').reverse(),
        res = new Array(arr1.length+arr2.length).fill(0);
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            var current = Number(arr1[i])*Number(arr2[j]);
            res[i+j]+=current%10;
            res[i+j+1]+=~~(current/10);
            var k=i+j;
            while(res[k]>9&&k<res.length){
                res[k+1] += ~~(res[k]/10);
                res[k] = res[k]%10;
                k++;
            }
        }
    }
   // console.log(res.reverse().join(''))
    return deleteZero(res.reverse().join(''));
};
let [num1,num2] = ["9333852702227987",
"85731737104263"];
console.log(multiply(num1,num2));
console.log(BigInt(num1)*BigInt(num2));