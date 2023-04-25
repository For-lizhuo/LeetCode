function topKFrequent(nums: number[], k: number): number[] {
  let map = new Map<number,number>();
  let arr = new Array<number[]>(nums.length+1).fill([]);
  let res = new Array<number>();
  for(let i=0;i<nums.length;i++){
    if(map.has(nums[i])){
      map.set(nums[i],(map.get(nums[i]) as number)+1);
    }
    else{
      map.set(nums[i],1);
    }
  }
  for(let [key,value] of map){
    arr[value].push(key);
  }
  for(let i=arr.length-1;i>0;i--){
    if(arr[i].length){
      res = [...res,...arr[i]];
    }
    if(res.length>=k){
      break;
    }
  }
  return res;
};