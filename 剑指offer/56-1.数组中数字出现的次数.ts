function singleNumbers(nums: number[]): number[] {
  let temp = 0;
  nums.forEach((item=>{
    temp = temp^item;
  }))
  console.log(temp,'temp')
  //将一个数和他的补码进行与运算可以得到最右边为1的位置
  let index = temp & (~temp + 1)
  let a = 0,b = 0;
  nums.forEach((item=>{
    if(item^index){
      a = a^item;
    }
    else{
      b = b^item;
    }
  }))
  return [a,b];
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 
var singleNumbers2 = function(nums) {  
  let eor = 0
  let eor1 = 0

  for(let i = 0; i < nums.length; i++){
    eor ^= nums[i]
  }
  console.log(eor,'eor')
  let rightOne = eor & (~eor + 1)

  for(let j = 0; j < nums.length; j++){
    if((nums[j] & rightOne) == 0){
      eor1 ^= nums[j]
    }
  }

  return([eor^eor1,eor1])
};