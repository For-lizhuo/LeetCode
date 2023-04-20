/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    const isValid = (char)=>{
        let temp = char.toLocaleLowerCase().charCodeAt(0);
        if((temp<=122&&temp>=97)||(temp>=48&&temp<=57)) return true;
        else return false;
    }
    let p=0,q=s.length-1;
    while(p<q){
        while(p<q&&!isValid(s[p])){
            p++;
        }
        while(p<q&&!isValid(s[q])){
            q--;
        }
        if(s[p].toLocaleLowerCase()!=s[q].toLocaleLowerCase()){
            return false;
        }
        else{
            p++;q--;
        }
    }
    return true;
};