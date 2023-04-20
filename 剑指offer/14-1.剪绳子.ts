const map = new Map<number,number>();
map.set(1,1);
map.set(2,1);
function cuttingRope(n: number): number {
  if(map.has(n)) return map.get(n) as number;
  let res = -Infinity;
  for(let i=1;i<=n/2;i++){
    res = Math.max(res,Math.max(i,cuttingRope(i))*Math.max(n-i,cuttingRope(n-i)));
  }
  map.set(n,res);
  return res;
};
