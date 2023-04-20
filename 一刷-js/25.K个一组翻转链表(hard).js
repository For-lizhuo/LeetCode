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
 var reverseKGroup = function(head, k) {
    if(!head)return head;
    let preHead = new ListNode();
    preHead.next = head;
    let p = preHead, r = head, q,nextP = preHead,nextHead = head,temp;
    for(let i=0;i<k;i++){
        nextHead = nextHead?.next;
        nextP = nextP?.next;
    }
    while(nextP){
        p.next = null;
        for(let i=0;i<k;i++){
            q = r;
            r = r.next;
            q.next = p.next;
            p.next = q;
        }
        for(let i=0;i<k;i++){
            p = p.next;
        }
        r = nextHead;
        p.next = nextHead;
        for(let i=1;i<k;i++){
            nextHead = nextHead?.next;
        }
        nextP = nextHead;
        nextHead = nextHead?.next;    
    }
    return preHead.next;
};