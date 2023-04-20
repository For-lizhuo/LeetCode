/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
//理解错题目意思，下面两个函数实现将链表中比x小的元素置于x前，大于x的元素置于x后
//头插法，改变了元素相对位置
 var partition = function(head, x) {
    let preSmall = new ListNode(),preBig = new ListNode();
    for(let cur = head;;cur = cur.next){
        if(cur.val==x){
            preBig = cur;
            break;
        }
    }
    preSmall.next = preBig;
    let bigHead = preBig.next;
    preBig.next = null;
    for(let cur = head,temp;cur.val!=x;){
        temp = cur.next;
        if(cur.val<x){
            cur.next = preSmall.next;
            preSmall.next = cur;
        }
        else{
            cur.next = preBig.next;
            preBig.next = cur;
        }
        cur = temp;
    }
    for(let cur = bigHead,temp;cur;){
        temp = cur.next;
        if(cur.val<x){
            cur.next = preSmall.next;
            preSmall.next = cur;
        }
        else{
            cur.next = preBig.next;
            preBig.next = cur;
        }
        cur = temp;
    }
    return preSmall.next;
};
//尾插法，保持元素相对位置不变
var partition = function(head, x) {
    let preSmall = new ListNode(),preBig = new ListNode();
    for(let cur = head;;cur = cur.next){
        if(cur.val==x){
            preBig = cur;
            break;
        }
    }
    let bigHead = preBig.next;
    preBig.next = null;
    let smallTail = preSmall, bigTail = preBig;
    for(let cur = head;cur.val!=x;cur = cur.next){
        if(cur.val<x){
            smallTail.next = cur;
            smallTail = smallTail.next;
        }
        else{
            bigTail.next = cur;
            bigTail = bigTail.next;
        }
    }
    smallTail.next = null;
    for(let cur = bigHead;cur;cur = cur.next){
        if(cur.val<x){
            smallTail.next = cur;
            smallTail = smallTail.next;
        }
        else{
            bigTail.next = cur;
            bigTail = bigTail.next;
        }
    }
    bigTail.next = null;
    smallTail.next = preBig;
    return preSmall.next;
};
var partition = function(head,x){
    let smallHead = new ListNode(),bigHead = new ListNode();
    let smallTail = smallHead,bigTail = bigHead;
    for(let cur = head;cur;cur = cur.next){
        if(cur.val<x){
            smallTail.next = cur;
            smallTail = smallTail.next;
        }
        else{
            bigTail.next = cur;
            bigTail = bigTail.next;
        }
    }
    [bigTail.next,smallTail.next] = [null,bigHead.next];
    return smallHead.next;
}