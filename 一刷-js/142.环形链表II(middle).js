function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    let set = new Set(),p = head;
    while(p){
        if(set.has(p)){
            return p;
        }
        else{
            set.add(p);
        }
        p = p.next;
    }
    return null;
};