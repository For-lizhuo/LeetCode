var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];
    this.store = 1;
    this.num = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    if(this.store==1){
        this.queue1.push(x);
    }
    else{
        this.queue2.push(x);
    }
    this.num = this.num+1;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let i = this.num;
    if(this.store==1){
        while(i>1){
            this.queue2.push(this.queue1.shift());
            i--;
        }
        this.num = this.num-1;
        this.store = 2;
        return this.queue1.pop();
    }
    else{
        while(i>1){
            this.queue1.push(this.queue2.shift());
            i--;
        }
        this.num = this.num-1;
        this.store = 1;
        return this.queue2.pop();
    }
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.store==1?this.queue1[this.num-1]:this.queue2[this.num-1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.num==0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */