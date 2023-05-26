type MapValue = {
  value: number;
  start: number;
  duration: number;
};
class TimeLimitedCache {
  private map: Map<number, MapValue>;
  constructor() {
    this.map = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    let res = this.get(key) === -1 ? false : true;
    this.map.set(key, { value, start: Date.now(), duration });
    return res;
  }

  get(key: number): number {
    const time = Date.now();
    if (this.map.has(key)) {
      const { value, start, duration } = <MapValue>this.map.get(key);
      if (time - start <= duration) return value;
    }
    return -1;
  }

  count(): number {
    let time = Date.now();
    let res = 0;
    for (let [key, value] of this.map) {
      if (time - value.start <= value.duration) res++;
    }
    return res;
  }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
