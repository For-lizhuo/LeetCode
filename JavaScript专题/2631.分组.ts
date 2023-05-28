declare global {
  interface Array<T> {
      groupBy(fn: (item: T) => string): Record<string, T[]>
  }
}
type Res = Record<string,any[]>;
Array.prototype.groupBy = function(fn:(...args:any[])=>string):Res|null {
  let res:Res = {};
  const arr:unknown[] = this;
  let key:string;
  for(let value of arr){
    key = fn(value);
    if(res.hasOwnProperty(key)){
      res[key].push(value);
    }
    else{
      res[key] = [value];
    }
  }
  return res;
}

/**
* [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
*/