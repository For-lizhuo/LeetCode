/**
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses = function(s) {
    let res = [];
    const backtrace = (index,path)=>{
        if(path.length==4&&index==s.length) return res.push(path.join('.'));
        if(path.length>4||path.length==4&&index<s.length||index>s.length) return;
        let cur = s[index];
        backtrace(index+1,[...path,cur]);
        if(cur!='0'){           
            if(index+1<s.length){
                cur = s[index]+s[index+1];
                backtrace(index+2,[...path,cur]);
               
            }
            if(index+2<s.length){
                cur = s[index]+s[index+1]+s[index+2];
                if(Number(cur)<=255){
                    backtrace(index+3,[...path,cur]);
                }
            }
        }
    }
    backtrace(0,[]);
    return res;
};