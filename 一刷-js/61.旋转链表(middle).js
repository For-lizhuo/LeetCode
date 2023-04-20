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
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
    let length = 0,preHead = new ListNode();
    preHead.next = head;
    let p = preHead,q = head;
    while(p.next){
        length++;
        p = p.next;
    }
    k = k%length;
    if(k==0||length==0) return head;
    for(let i = 1;i<length-k;i++){
        q = q.next;
    }
    preHead.next = q.next;
    q.next = null;
    p.next = head;
    return preHead.next;
}