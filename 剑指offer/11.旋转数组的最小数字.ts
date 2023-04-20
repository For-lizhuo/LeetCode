function minArray(numbers: number[]): number {
  let head=0,tail=numbers.length-1;
  let mid:number;
  while(head<tail){
    mid = ~~((head+tail)/2);
    if(numbers[mid]<numbers[tail]){
      tail = mid;
    }
    else if(numbers[mid]===numbers[tail]){
      tail--;
    }
    else{
      head = mid+1;
    }
  }
  return numbers[head];
};