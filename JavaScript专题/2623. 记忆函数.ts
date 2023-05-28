export type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
  let map = new Map<string, any>();
  return function (...args: unknown[]) {
    let key = args.join(",");
    if (!map.has(key)) {
      let value = fn(...args);
      map.set(key, value);
    }
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
