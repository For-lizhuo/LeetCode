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
 * @param {number} n
 * @return {ListNode}
 */
//计算链表长度
 var removeNthFromEnd = function(head, n) {
    let length = 0,p=head;
    while(p){
        p=p.next;
        length++;
    }
    if(length==1&&n==1){
        head=null;
        return head;
    }
    let serial = length-n;
    if(serial==0){
        head = head.next;
        return head;
    }
    p=head;
    for(let i=1;i<serial;i++){
        p=p.next;
    }
    p.next = p.next.next;
    return head;
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//添加头节点+快慢指针
var removeNthFromEnd = function(head, n) {
    let preHead = new ListNode();
    preHead.next = head;
    let slow = preHead,fast = preHead;
    for(let i=0;i<n;i++){
        fast = fast.next;
    }
    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return preHead.next;
};
