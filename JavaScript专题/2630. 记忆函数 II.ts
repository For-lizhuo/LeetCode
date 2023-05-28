export type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
  const map = new Map<string, ReturnType<Fn>>();
  return function (...args: Parameters<Fn>): ReturnType<Fn> {
    for(let value of args){
      if(typeof value==='object') return fn(...args);
    }
    let key = JSON.stringify(args);
    if (!map.has(key)) map.set(key, fn(...args));
    return map.get(key);
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
