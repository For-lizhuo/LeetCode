export type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    for(let fun of functions.reverse()){
      x = fun(x);
    }
    return x;
  };
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
