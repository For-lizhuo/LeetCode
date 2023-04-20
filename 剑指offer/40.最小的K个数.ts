function partition(arr:number[],left:number,right:number):number{
  let pivot = arr[right],k = left;
  for(let i=left;i<right;i++){
    if(arr[i]<pivot){
      [arr[i],arr[k]] = [arr[k],arr[i]];
      k++;
    }
  }
  [arr[right],arr[k]] = [arr[k],arr[right]];
  console.log(arr,arr[k])
  return k;
}
function getLeastNumbers(arr: number[], k: number): number[] {
  if([0,k].includes(arr.length)) return [...arr];
  let left = 0,right = arr.length-1;
  let pivotIndex = partition(arr,left,right);
  while(pivotIndex!==k){
    if(pivotIndex<k){
      left = pivotIndex+1;   
    }
    else{
      right = pivotIndex-1;
    }
    pivotIndex = partition(arr,left,right); 
  }  
  return arr.slice(0,k);
};