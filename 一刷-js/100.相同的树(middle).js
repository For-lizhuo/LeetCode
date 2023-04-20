/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    const midOrderTraversal = (p,q)=>{
        if(!p&&!q) return true;
        else if(p&&!q||q&&!p) return false;
        else{
            if(p.val!=q.val) return false;
            else{
                return midOrderTraversal(p.left,q.left)&&midOrderTraversal(p.right,q.right);
            }
        }
    }
    return midOrderTraversal(p,q);
};