function printNumbers(n: number): number[] {
  let res = new Array<number>(10**n-1).fill(0);
  res.forEach((value,index)=>{
    res[index] = index+1;
  })
  return res;
};