/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
    let pathArr = path.split('/');
    console.log(pathArr);
    let stack = [],cur;
    for(let i=0;i<pathArr.length;i++){
        cur = pathArr[i];
        if(cur=='..'&&stack.length>1){
            stack.pop();
            stack.pop();
        }
        else if(!['.','..',''].includes(cur)){
            stack.push('/');
            stack.push(cur);
        }
    }
    return stack.length!=0?stack.join(''):'/';
};
console.log(simplifyPath("/../"))