/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = [],current,pop;
    let reflect = {
        '(':')',
        '[':']',
        '{':'}'
    }
    for(let i=0;i<s.length;i++){
        current = s[i];
        if(current=='('||current=='['||current=='{'){
            stack.push(current);
        }
        else{
            if(stack.length==0) return false;
            pop = stack.pop();
            if(reflect[pop]!=current) return false;
        }
    }
    return stack.length==0?true:false;
};