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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let list3 = new ListNode();
    let p1 = list1,p2=list2,p3 = list3;
    while(p1&&p2){
        if(p1.val<p2.val){
            p3.next = p1;
            p1 = p1.next;           
        }
        else{
            p3.next = p2;
            p2 = p2.next;
        }
        p3 = p3.next;
    }
    if(p1){
        p3.next=p1;
    }
    if(p2){
        p3.next=p2;
    }
    return list3.next;
};
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
//递归
 var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2;
    else if(!list2) return list1;
    else if(list1.val<list2.val){
        list1.next = mergeTwoLists(list1.next,list2);
        return list1;
    }
    else if(list1.val>=list2.val){
        list2.next = mergeTwoLists(list1,list2.next);
        return list2;
    }
};