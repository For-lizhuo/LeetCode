function permutation(s: string): string[] {
  let res = new Set<string>();
  const recursion = (subS:string,path:string):void=>{
    if(path.length===s.length) {
      res.add(path);
      return;
    }
    for(let i=0;i<subS.length;i++){
      recursion(subS.slice(0,i)+subS.slice(i+1),path+subS[i]);
    }
  }
  recursion(s,'');
  return Array.from(res);
};