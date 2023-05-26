function createCounter(n: number): () => number {
  globalThis['counter'] = n;
  return function() {
    return globalThis['counter']++;
  }
}


/** 
* const counter = createCounter(10)
* counter() // 10
* counter() // 11
* counter() // 12
*/