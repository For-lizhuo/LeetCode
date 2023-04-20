interface CQueue{
  stack1:number[],
  stack2:number[]
}

class CQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  appendTail(value: number): void {
    this.stack1.push(value);
  }

  deleteHead(): number {
    if(this.stack1.length===0&&this.stack2.length===0) {
      return -1;
    }
    else if(this.stack2.length>0){
      return <number>this.stack2.pop();
    }
    else{
      while(this.stack1.length){
        this.stack2.push(<number>this.stack1.pop());
      }
      return <number>this.stack2.pop();
    }
    
  }
}

/**
* Your CQueue object will be instantiated and called as such:
* var obj = new CQueue()
* obj.appendTail(value)
* var param_2 = obj.deleteHead()
*/