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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    let preHead = new ListNode();
    preHead.next = head;
    let reverseHead = head,reverseTail = head,reversePreHead = preHead;
    for(let i=1;i<=right-left;i++)reverseTail = reverseTail.next;
    for(let i=1;i<left;i++){
        reversePreHead = reversePreHead.next;
        reverseHead = reverseHead.next;
        reverseTail = reverseTail.next;
    }
    reversePreHead.next = reverseTail.next;
    for(let i=0,temp;i<=right-left;i++){
        temp = reverseHead.next;
        reverseHead.next = reversePreHead.next;
        reversePreHead.next = reverseHead;
        reverseHead = temp;
    }
    return preHead.next;
};