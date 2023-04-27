//暴力法
// function dailyTemperatures(temperatures: number[]): number[] {
//   let res = new Array<number>(temperatures.length).fill(0);
//   for(let i=0;i<temperatures.length-1;i++){
//     for(let j=i+1;j<temperatures.length;j++){
//       if(temperatures[j]>temperatures[i]){
//         res[i] = j-i;
//       }
//     }
//   }
//   return res;
// };
//单调栈
type StackElement = {
  value:number,
  index:number
}
function dailyTemperatures(temperatures: number[]): number[] {
  let stack = new Array<StackElement>();
  let res = new Array<number>(temperatures.length).fill(0);
  let temp:StackElement;
  for(let i=0;i<temperatures.length;i++){
    while(stack.length!==0&&temperatures[i]>stack[stack.length-1].value){
        temp = stack.pop() as StackElement;
        res[temp.index] = i-temp.index;
    }
    stack.push({
      value:temperatures[i],
      index:i,
    });
  }
  return res;
};