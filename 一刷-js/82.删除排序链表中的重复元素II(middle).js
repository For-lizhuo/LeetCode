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
//两次遍历
 var deleteDuplicates = function(head) {
    if(!head||!head.next) return head;
    let set = new Set();
    let cur = head;
    while(cur.next){
        if(cur.val==cur.next.val) set.add(cur.val);
        cur = cur.next;
    }
    let preHead = new ListNode();
    preHead.next = head;
    let pre = preHead;
    cur = head;
    while(cur){
        if(set.has(cur.val)){
            pre.next = cur.next;
            cur = pre.next;
        }
        else{
            pre = pre.next;
            cur = cur.next;
        }
    }
    return preHead.next;
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//一次遍历
var deleteDuplicates = function(head) {
    if(!head||!head.next) return head;
    let preHead = new ListNode(),set = new Set();
    preHead.next = head;
    let pre = preHead,cur = head;
    while(cur){
        if(set.has(cur.val)||cur.val==cur.next?.val){
            set.add(cur.val);
            pre.next = cur.next;
            cur = pre.next;
        }
        else{
            pre = pre.next;
            cur = cur.next;
        }
    }
    return preHead.next;
};
//不需要set
var deleteDuplicates = function(head) {
    if(!head||!head.next) return head;
    let preHead = new ListNode(),set = null;
    preHead.next = head;
    let pre = preHead,cur = head;
    while(cur){
        if(set==cur.val||cur.val==cur.next?.val){
            set = cur.val;
            pre.next = cur.next;
            cur = pre.next;
        }
        else{
            pre = pre.next;
            cur = cur.next;
        }
    }
    return preHead.next;
};