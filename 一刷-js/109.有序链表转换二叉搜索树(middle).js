function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var sortedArrayToBST = function(nums) {
    let root = new TreeNode();
    let midIndex = parseInt((nums.length-1)/2);
    root.val = nums[midIndex];
    const recursion = (root,left,right)=>{
        if(left.length){
            let node = new TreeNode();
            let midIndex = parseInt((left.length-1)/2);
            node.val = left[midIndex];
            root.left = node;
            recursion(root.left,left.slice(0,midIndex),left.slice(midIndex+1));
        }
        if(right.length){
            let node = new TreeNode();
            let midIndex = parseInt((right.length-1)/2);
            node.val = right[midIndex];
            root.right = node;
            recursion(root.right,right.slice(0,midIndex),right.slice(midIndex+1));
        }
    }
    recursion(root,nums.slice(0,midIndex),nums.slice(midIndex+1));
    return root;
};
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if(!head) return[];
    let arr = [];
    let p = head;
    while(p){
        arr.push(p.val);
        p = p.next;
    }
    return sortedArrayToBST(arr);
};