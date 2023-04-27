//暴力法
function findAnagrams(s: string, p: string): number[] {
  const judge = (s1:string,s2:string):boolean=>{
    let map = new Map<string,number>();
    for(let s of s1){
      if(map.has(s)){
        map.set(s,map.get(s) as number+1);
      }
      else{
        map.set(s,1);
      }
    }
    for(let s of s2){
      if(!map.has(s)){
        return false;
      }
      else if(map.get(s)===1){
        map.delete(s);
      }
      else{
        map.set(s,map.get(s) as number-1);
      }
    }
    return map.size===0;
  }
  const length = p.length;
  const res = new Array<number>();
  let last = false;
  for(let i=0;i<=s.length-length;i++){
    if(!last&&judge(p,s.slice(i,i+length))){
      last=true;
      res.push(i);
    }
    else if(last&&s[i-1]===s[i-1+length]){
      res.push(i);
    }
    else if(last){
      last = false;
    }
  }
  return res;
};
