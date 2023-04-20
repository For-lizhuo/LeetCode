/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
 var isInterleave = function(s1, s2, s3) {
    if(s1.length+s2.length!=s3.length) return false;
    let res = [...new Array(s1.length+1)].map(()=>new Array(s2.length+1).fill(null));
    const recursion = (index1,index2,index3)=>{
        if(res[index1][index2]!=null) return res[index1][index2];
        res[index1][index2] = false;
        if(index3==s3.length) return res[index1][index2] = true;
        if(index1==s1.length){
            return res[index1][index2] = s2.slice(index2)==s3.slice(index3);
        }
        if(index2==s2.length){
            return res[index1][index2] = s1.slice(index1)==s3.slice(index3);
        }
        if(s1[index1]==s3[index3]){
            res[index1][index2] = recursion(index1+1,index2,index3+1)
        }
        if(s2[index2]==s3[index3]){
            res[index1][index2] = res[index1][index2]||recursion(index1,index2+1,index3+1);
        } 
        return res[index1][index2];            
    }
    return recursion(0,0,0);
};