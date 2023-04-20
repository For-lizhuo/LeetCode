function fib(n: number): number {
  const map = new Map();
  map.set(0,0);
  map.set(1,1);
  const func = (n:number):number=>{
    if(!map.has(n)){
      let temp = func(n-1)+func(n-2);
      map.set(n,temp);
    }
    return map.get(n)%1000000007;
  }
  return func(n);
};