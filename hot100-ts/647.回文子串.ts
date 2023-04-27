function countSubstrings(s: string): number {
  let res = 0;
  let l:number;
  let r:number;
  for(let i=0;i<s.length;i++){
    l = i;
    r = i;
    do{
      res++;
      l--;
      r++;
    }while(l>=0&&r<s.length&&s[l]===s[r])
  }
  for(let i=0;i<s.length;i++){
    l=i;
    r=i+1;
    while(l>=0&&r<s.length&&s[l]===s[r]){
      res++;
      l--;
      r++;
    }
  }
  return res;
};