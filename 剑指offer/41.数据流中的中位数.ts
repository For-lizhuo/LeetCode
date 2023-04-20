class MedianFinder {
  private array:Array<number>;
  constructor() {
    this.array = new Array<number>();
  }

  addNum(num: number): void {
    this.array.push(num);
    let index = this.array.length-1;
    for(let i=0;i<this.array.length-1;i++){
      if(this.array[i]>=num){
        index = i;
        break;
      }
    }
    if(index<this.array.length-1){
      for(let i=this.array.length-1;i>index;i--){
        this.array[i] = this.array[i-1];
      }
    }
    this.array[index] = num;
  }

  findMedian(): number {
    if(this.array.length&1) return this.array[this.array.length-1>>1];
    else {
      return (this.array[this.array.length>>1]+this.array[(this.array.length>>1)-1])/2;
    }
  }
}