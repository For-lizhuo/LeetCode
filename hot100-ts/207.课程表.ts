function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const isComplete = new Array<boolean>(numCourses).fill(false);
  let set:Set<number>;
  let cur:Set<number>;
  while(prerequisites.length>0){
    set = new Set(prerequisites.map(value=>value[0]));
    cur = new Set();
    isComplete.forEach((value,index)=>{
      if(value===false&&!set.has(index)){
        isComplete[index] = true;
        cur.add(index);
      }
    })
    if(cur.size===0) return false;
    prerequisites = prerequisites.filter(value=>!cur.has(value[1]));
  }
  return true;
};