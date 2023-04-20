/**
 * @param  {string} str
 */
const getNext = (str)=>{
    let current,curnum=0,res='',i=0;
    while(i<str.length){
        current = str[i];
        curnum = 1;
        while(str[i+1]==current){
            i++;curnum++;
        }
        res = res + curnum + current;
        i++;
    }
    return res;
}
/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    let res='1';
    for(let i=2;i<=n;i++){
        res = getNext(res);
    }
    return res;
};