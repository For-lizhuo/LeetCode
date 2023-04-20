type Min = [number,number];
class MinStack {
  private minPointer:number;
  private minArray:Array<Min>;
  private stack:Array<number>
  constructor() {
    this.minPointer = -1;
    this.minArray = new Array<Min>();
    this.stack = new Array<number>();
  }

  push(x: number): void {
    if(this.minPointer===-1||(this.minPointer!==-1&&x<this.minArray[this.minPointer][1])){
      this.minPointer++;
      this.minArray.push([this.stack.length,x]);
    }
    this.stack.push(x);
  }

  pop(): void {
    if(this.stack.length-1===this.minArray[this.minPointer][0]){
      this.minArray.pop();
      this.minPointer--;
    }
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length-1];
  }

  min(): number {
    return this.minArray[this.minPointer][1];
  }
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.min()
*/