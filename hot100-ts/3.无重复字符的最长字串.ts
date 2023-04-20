function lengthOfLongestSubstring(s: string): number {
  let set = new Set<string>();
  let [p1,p2,res,cal] = [0,0,0,0];
  while(p2<s.length){
    if(set.has(s[p2])){
      res = res>cal?res:cal;
      while(s[p1]!=s[p2]){
        set.delete(s[p1]);
        p1++;
        cal--;
      }
      p1++;
      p2++;
    }
    else{
      set.add(s[p2]);
      cal++;
      p2++;
    }  
  }
  return res>cal?res:cal;
};