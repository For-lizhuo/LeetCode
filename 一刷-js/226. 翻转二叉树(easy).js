function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    const recursion = (root)=>{
        if(!root) return;
        let left = root?.left,right = root?.right;
        if(left) recursion(root.left);
        if(right) recursion(root.right);
        [root.left,root.right] = [right,left];
    }
    recursion(root);
    return root;
};