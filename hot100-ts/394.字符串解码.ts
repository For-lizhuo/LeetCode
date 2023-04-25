function decodeString(s: string): string {
  const stack = new Array<string>();
  let temp = '';//记录当前读取的[]中的字符串
  let repeat = '';//记录当前读取的[]前面的数字
  for(let i=0;i<s.length;i++){
    if(s[i]===']'){
      while(stack[stack.length-1]!='['){
        temp = stack.pop() + temp;
      }
      stack.pop();//将'['弹出，然后开始获取[]前的数字
      while(RegExp(/[0-9]/).test(stack[stack.length-1])){
        repeat = stack.pop() + repeat;
      }
      stack.push(temp.repeat(parseInt(repeat)));//将经过重复的字符串压入栈中
      temp = '';
      repeat = '';
    }
    else{
      stack.push(s[i]);
    }
  }
  return stack.join('');
};