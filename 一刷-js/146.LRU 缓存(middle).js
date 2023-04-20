/**
 * @param {number} capacity
 */
//基于ES6 Map中keys的有序性来实现
//一个Map对象在迭代时会根据对象中元素的插入顺序来进行
//map.keys().next().value可以得到第一个放入元素的key
 var LRUCache = function(capacity) {
    this.volume = capacity;
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let value = this.map.get(key);
    if(value===undefined) return -1;
    else{
        this.map.delete(key);
        this.map.set(key,value);
        return value;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.get(key)!==-1){
        this.map.delete(key);
        this.map.set(key,value);
    }
    else{
        if(this.map.size>=this.volume){
            this.map.delete(this.map.keys().next().value);
        }
        this.map.set(key,value);
    } 
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */