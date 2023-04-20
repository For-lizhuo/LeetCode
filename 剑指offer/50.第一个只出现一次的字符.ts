function firstUniqChar(s: string): string {
  let set = new Set<string>();
  let repeat = new Set<string>();
  for(let i=0;i<s.length;i++){
    if(set.has(s[i])){
      repeat.add(s[i]);
    }
    else{
      set.add(s[i]);
    }
  }
  for(let i=0;i<s.length;i++){
    if(!repeat.has(s[i])){
      return s[i];
    }
  }
  return ' ';
};