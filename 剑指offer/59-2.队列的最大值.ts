class MaxQueue {
  private queue;
  private maxQueue;
  constructor() {
    this.queue = new Array<number>();
    this.maxQueue = new Array<number>()
  }

  max_value(): number {
    if(this.maxQueue.length>0) return this.maxQueue[0];
    else return -1;
  }

  push_back(value: number): void {
    this.queue.push(value);
    while(this.maxQueue.length>0&&this.maxQueue[this.maxQueue.length-1]<value){
      this.maxQueue.pop();
    }
    this.maxQueue.push(value);
  }

  pop_front(): number {
    if(this.queue.length>0){
      let res = this.queue.shift() as number;
      if(res===this.maxQueue[0]){
        this.maxQueue.shift();
      }
      return res;
    }
    else return -1;
  }
}

/**
* Your MaxQueue object will be instantiated and called as such:
* var obj = new MaxQueue()
* var param_1 = obj.max_value()
* obj.push_back(value)
* var param_3 = obj.pop_front()
*/