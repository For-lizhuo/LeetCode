type Arr = Array<Array<1|0>>;

function movingCount(m: number, n: number, k: number): number {
  let arr:Arr = new Array(m).fill(0).map(value=>new Array(m).fill(0));
  let res = 0;
  const judgeEnter = (x:number,y:number):boolean=>{
    let sum = 0;
    while(x){
      sum += x%10;
      x = ~~(x/10);
    }
    while(y){
      sum += y%10;
      y = ~~(y/10);
    }
    return sum>k?false:true;
  }
  const dfs = (x:number,y:number):void=>{
    if(judgeEnter(x,y)===false) return;
    arr[x][y] = 1;
    res += 1;
    if(x+1<m) dfs(x+1,y);
    if(x-1>=0) dfs(x-1,y);
    if(y+1<n) dfs(x,y+1);
    if(y-1>=0) dfs(x,y-1);
  }
  dfs(0,0);
  return res;
};