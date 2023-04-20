function findContinuousSequence(target: number): number[][] {
  let res = new Array<number[]>();
  let left = 1,right = 1,stack = new Array<number>(),sum = 0;
  stack.push(0);
  while(left<=target>>1){
    if(sum===target){
      res.push([...stack.slice(left)]);
      right++;
      sum += right;
    }
    else if(sum<target){
      right++;
      stack.push(right);
      sum += right;
    }
    else{
      sum -= left;
      left++;
    }
  }
  return res;
};