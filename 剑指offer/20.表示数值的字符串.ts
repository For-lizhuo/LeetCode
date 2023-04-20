function isNumber(s: string): boolean {
  const isInt = (s:string):boolean=>{
    const regex = /[0-9]/;
    if(s.length===1&&s==='+'||s==='-') return false;
    if(!(['+','-'].includes(s[0]))&&!regex.test(s[0])){
      return false;
    }
    for(let i=1;i<s.length;i++){
      if(!regex.test(s[i])){
        return false;
      }
    }
    return true;
  }
  const isDouble = (s:string):boolean=>{
    let arr = s.split('.');
    if(arr.length>2||arr.length<1){
      return false;
    }
    if(arr.length===1&&arr[0].length==0) return false;
    if(arr.length===2&&arr[0].length==0&&arr[1].length==0) return false;
    if(arr.length===2&&arr[1].length!=0&&['+','-'].includes(arr[1][0])){
      return false;
    }
    if(arr.length===2&&(arr[0]=='+'||arr[0]=='-')) return isInt(arr[1]);
    let res = true;
    for(let i=0;i<arr.length;i++){
      if(arr[i].length===0) continue;
      res = res&&isInt(arr[i]);
    }
    return res;
  }
  s = s.trim();
  let arr:string[] = s.split(/e/i);
  if(arr.length==1) return isInt(s)||isDouble(s);
  else if(arr.length==2){
    if(arr[0].length===0||arr[1].length===0) return false;
    return (isInt(arr[0])||isDouble(arr[0]))&&isInt(arr[1]);
  }
  return false;
};