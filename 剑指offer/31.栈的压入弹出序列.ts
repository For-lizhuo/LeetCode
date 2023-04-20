function validateStackSequences(pushed: number[], popped: number[]): boolean {
  let stack = new Array<number>(),temp:number;
  for(let i=0,j=0;i<popped.length;i++){
    temp = popped[i];
    if(stack.indexOf(temp)===-1){
      while(pushed[j]!==temp&&j<pushed.length){
        stack.push(pushed[j]);
        j++;
      }
      if(j===pushed.length) return false;
      j++;
    }
    else{
      if(stack[stack.length-1]===temp){
        stack.pop();
      }
      else return false;
    }
  }
  return true;
};