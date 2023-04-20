/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
    if(s[0]=='0') return 0;
    if(s.length==1) return 1;
    let f1=1,f2,temp;
    temp = s[0]+s[1];
    if(s[1]=='0'&&['1','2'].includes(s[0])){
        f2 = 1;
    }
    else if(s[1]=='0'&&!['1','2'].includes(s[0])){
        f2 = 0;
    }
    else if(Number(temp)>26){
        f2 = 1;
    }
    else f2 = 2;
    res = f2;
    for(let i=2;i<s.length;i++){
        temp = s[i-1]+s[i];
        if(s[i]=='0'&&!['1','2'].includes(s[i-1])) return 0;
        else if(s[i]=='0'&&['1','2'].includes(s[i-1])) res = f1;      
        else if(s[i-1]!='0'&&Number(temp)<=26){
            //console.log('t')
            res = f1+f2;
        }
        [f2,f1] = [res,f2];
        //console.log(res,i)
    }
    return res;
};