function reverseWords(s: string): string {
  s = s.trim();
  let stack = new Array<string>();
  let word = '';
  for(let i=0;i<s.length;i++){
    if(s[i]===' '&&word.length===0) continue;
    else if(s[i]===' '&&word.length>0){
      stack.push(word);
      word = '';
    }
    else{
      word = word.concat(s[i]);
    }
  }
  let res = '';
  while(stack.length){
    res = res.concat(stack.pop() as string);
    if(stack.length){
      res = res.concat(' ');
    }
  }
  return res;
};