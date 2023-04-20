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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
//暴力解法
 var mergeKLists = function(lists) {
    let result = new ListNode();
    for(let value of lists){
        result.next = mergeTwoLists(result.next,value);
    }
    return result.next;
};

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
//分治法
var mergeKLists = function(lists) {
    if(!lists.length) return null;
    const merge = (left,right)=>{
        if(left==right){
            return lists[left];
        }
        mid = parseInt((left + right)/2);
        let l1 = merge(left,mid);
        let l2 = merge(mid+1,right);
        return mergeTwoLists(l1,l2);
    }
    return merge(0,lists.length-1);
};