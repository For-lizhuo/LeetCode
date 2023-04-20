/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
//模拟加法
var addBinary = function(a, b) {
    a = a.split('').reverse().join('');
    b = b.split('').reverse().join('');
    let res = '0';
    let i=0,j=0,cur;
    while(a[i]&&b[i]){
        cur = +a[i] + +b[i] + (res[i]?+res[i]:0);
        console.log(cur,'cur')
        if([0,1].includes(cur)) res = res.slice(0,i)+cur;
        else if([2,3].includes(cur)){
            console.log('b',res)
            res = res.slice(0,i)+cur%2;
            res = res.concat('1');
            console.log('a',res)
        } 
        console.log(res,'res')
        i++;
    }
    while(a[i]){
        cur = +a[i] + (res[i]?+res[i]:0);
        if([0,1].includes(cur)) res = res.slice(0,i)+cur;
        else if(cur==2){
            res = res.slice(0,i)+0;
            res = res.concat('1');
        } 
        i++;
    }
    while(b[i]){
        cur = +b[i] + (res[i]?+res[i]:0);
        if([0,1].includes(cur)) res = res.slice(0,i)+cur;
        else if(cur==2){
            res = res.slice(0,i)+0;
            res = res.concat('1');
        } 
        i++;
    }
    return res.split('').reverse().join('');
};