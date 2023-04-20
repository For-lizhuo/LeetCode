function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    let p = head,q = head;
    while(q){
        q = q?.next?.next;
        p = p?.next;
        if(q&&q==p) return true;
    }
    return false;
};