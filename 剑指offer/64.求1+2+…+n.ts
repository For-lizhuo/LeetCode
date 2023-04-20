function sumNums(n: number): number {
  return n&&n+sumNums(n-1);
};