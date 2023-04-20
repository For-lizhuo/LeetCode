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
 var deleteDuplicates = function(head) {
    let pre = head, cur = head?.next;
    while(cur){
        if(pre.val==cur.val){
            pre.next = cur.next;
            cur = pre.next;
        }
        else{
            pre = pre.next;
            cur = cur.next;
        }
    }
    return head;
};