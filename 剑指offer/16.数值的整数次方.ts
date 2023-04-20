function myPow(x: number, n: number): number {
  let map = new Map<number,number>();
  map.set(0,1);
  map.set(1,n>0?x:1/x);
  const pow = (x:number,n:number):number=>{
    if(map.has(n)) return map.get(n) as number;
    let res:number;
    if((n&1)===0){
      res = pow(x,n>>>1)*pow(x,n>>>1);
    }
    else{
      res = x*pow(x,(n-1)>>>1)*pow(x,(n-1)>>>1);
    }
    map.set(n,res);
    return res;
  }
  if(n>=0) return pow(x,n);
  else return pow(1/x,-n);
};