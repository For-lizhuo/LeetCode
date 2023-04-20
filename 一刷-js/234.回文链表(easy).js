function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let stack = [];
    while(head){
        stack.push(head.val);
        head = head.next;
    }
    let reverse = [...stack].reverse();
    for(let i=0;i<stack.length;i++){
        if(stack[i]!=reverse[i]){
            return false;
        }
    }
    return true;
};