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
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    if(!head) return null;
    if(!head.next) return head;
    let preHead = new ListNode();
    preHead.next = head;
    let p = preHead,left = p.next,right = left.next;
    while(left&&right){
        left.next = right.next;
        p.next = right;
        right.next = left;
        p = right.next;
        left = p?.next;
        right = left?.next;
    }
    return preHead.next
};