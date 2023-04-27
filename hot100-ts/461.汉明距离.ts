function hammingDistance(x: number, y: number): number {
  let z = x^y;
  let res = 0;
  while(z){
    res += z&1;
    z = z>>1;
  }
  return res;
};