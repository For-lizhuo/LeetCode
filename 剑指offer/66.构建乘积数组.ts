function constructArr(a: number[]): number[] {
  if(a.length<=0) return [];
  let arr = new Array<number>(a.length);
  arr[0] = 1;
  for(let i=1;i<a.length;i++){
    arr[i] = arr[i-1]*a[i-1];
  }
  let right = 1;
  for(let i=a.length-1;i>=0;i--){
    arr[i] = arr[i]*right;
    right = right*a[i];
  }
  return arr;
};