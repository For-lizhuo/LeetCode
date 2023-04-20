function lastRemaining(n: number, m: number): number {
  let res = 0;
  for(let i=2;i<=n;i++){
    res = (res+m)%i;
  }
  return res;
};