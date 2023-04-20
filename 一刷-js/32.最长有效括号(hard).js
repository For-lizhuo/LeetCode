function isValid(subString){
    let left = 0,i=0;
    while(i<subString.length){
        if(subString[i++]=='('){
            left++;
        }
        else{
            if(left)left--;
            else return false;
        }
    }
    return left==0?true:false;
}
//官解方法三，从左往右以及从右往左分别遍历一次
/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
    let left = 0,right = 0,max = 0,current;
    //从左往右遍历
    for(let i=0;i<s.length;i++){
        current = s[i];
        if(s[i]=='('){
            left++;
        }
        else if(s[i]==')'){
            right++;
        }
        if(left&&left==right){
            max = Math.max(max,left+right);
        }
        else if(right>left){
            left = 0;
            right = 0;
        }
    }
    [left,right]=[0,0];
    //从右往左遍历
    for(let i=s.length-1;i>=0;i--){
        current = s[i];
        if(s[i]=='('){
            left++;
        }
        else if(s[i]==')'){
            right++;
        }
        if(left&&left==right){
            max = Math.max(max,left+right);
        }
        else if(right<left){
            left = 0;
            right = 0;
        }
    }
    return max;
};

//官解方法二，使用栈
/**
 * @param {string} s
* @return {number}
*/
var longestValidParentheses = function(s) {
    let stack = [-1],max = 0,current,temp;
    for(let i=0;i<s.length;i++){
        current = s[i];
        if(current=='(') stack.push(i);
        else if(current==')'){
            temp = stack.pop();
            if(stack.length==0){
                stack.push(i);
            }
            else{
                max = Math.max(max,i-stack[stack.length-1]);
            }
        }
    }
    return max;
};
console.log(longestValidParentheses('((((()))'))