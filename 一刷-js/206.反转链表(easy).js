function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let preHead = new ListNode(),p = head,q;
    while(p){
        q = p.next;
        p.next = preHead.next;
        preHead.next = p;
        p = q;
    }
    return preHead.next;
};