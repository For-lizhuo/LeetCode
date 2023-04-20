function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let lengthA = 0,lengthB = 0;
    let p = headA,q = headB;
    while(p){
        p = p.next;
        lengthA++;
    }
    p = headB;
    while(p){
        p = p.next;
        lengthB++;
    }
    let gump = lengthA-lengthB;
    if(gump>0){
        p = headA;
        while(gump){
            p = p.next;
        }
    }
    else if(gump<0){
        q = headB;
        while(gump){
            p = p.next;
        }
    }
    while(p!=q){
        console.log(p.val,q.val)
        p = p.next;
        q = q.next;
    }
    return p;
};