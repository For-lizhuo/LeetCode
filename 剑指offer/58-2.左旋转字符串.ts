function reverseLeftWords(s: string, n: number): string {
  return s.slice(n).concat(s.slice(0,n));
};