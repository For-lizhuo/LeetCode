function leastInterval(tasks: string[], n: number): number {
  let map = new Map<string,number>();
  for(let i=0;i<tasks.length;i++){
    if(!map.has(tasks[i])){
      map.set(tasks[i],1);
    }
    else{
      map.set(tasks[i],map.get(tasks[i]) as number+1);
    }
  }
  let max = Math.max(...Array.from(map.values()));
  let res = (max-1)*(n+1);
  for(let [key,value] of map){
    if(value===max){
      res++;
    }
  }
  return Math.max(res,tasks.length);
};