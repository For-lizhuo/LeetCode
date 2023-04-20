function strToInt(str: string): number {
  str = str.trim();
  let signal = 1;
  let start:number,res = '';
  if(str[0]==='+'){
    signal = 1;
    start = 1;
  }
  else if(str[0]==='-'){
    signal = -1;
    start = 1;
  }
  else if(/[0-9]/.test(str[0])){
    start = 0;
  }
  else{
    return 0;
  }
  for(let i=start;i<str.length;i++){
    if(/[0-9]/.test(str[i])){
      res += str[i];
    }
    else{
      break;
    }
  }
  if(res==='') return 0;
  let resNumber = Number(res)*signal;
  if(resNumber>2**31-1) return 2**31-1;
  else if(resNumber<-(2**31)) return -(2**31);
  return resNumber;
};