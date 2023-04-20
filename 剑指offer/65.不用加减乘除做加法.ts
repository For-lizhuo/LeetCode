function add(a: number, b: number): number {
  let carry:number;
  while(b){
    carry = (a&b)<<1;
    a = a^b;
    b = carry;
  }
  return a;
};