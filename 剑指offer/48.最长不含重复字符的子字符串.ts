function lengthOfLongestSubstring(s: string): number {
  if(s.length<=1) return s.length;
  let set = new Set<string>(s[0]),res = 1;
  for(let i=1,start=0;i<s.length;i++){
    if(set.has(s[i])){
      while(s[start]!==s[i]){
        set.delete(s[start]);
        start++;
      }
      start++;
    }
    else{
      set.add(s[i]);
      res = Math.max((i-start+1),res);
    }
  }
  return res;
};