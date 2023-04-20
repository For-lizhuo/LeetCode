function hammingWeight(n: number): number {
  let res = 0;
  while(n){
    if(n&1)res++;
    n = n>>>1;
  }
  return res;
};