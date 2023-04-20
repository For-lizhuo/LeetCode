function countDigitOne(n: number): number {
  let res = 0,cur:number,high:number,low:number;
  for(let i=1;i<=n.toString().length;i++){
    cur = ~~((n%(10**i))/(10**(i-1)));
    high = ~~(n/(10**i));
    low = n%(10**(i-1));
    if(cur>1) res += (high+1)*(10**(i-1));
    else if(cur===1) res += ((high)*(10**(i-1))+(low+1));
    else res += (high)*(10**(i-1));
  }
  return res;
};
