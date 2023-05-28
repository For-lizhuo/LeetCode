type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  let res = init;
  for(let value of nums){
    res = fn(res,value);
  }
  return res;
};