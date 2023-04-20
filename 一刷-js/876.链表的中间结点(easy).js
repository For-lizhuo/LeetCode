/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let preHead = new ListNode();
    preHead.next = head;
    let slow = preHead,swift = preHead;
    while(swift){
        slow = slow.next;
        swift = swift?.next?.next;
    }
    return slow;
};