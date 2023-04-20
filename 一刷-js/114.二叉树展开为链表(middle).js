function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    let p = new TreeNode();
    const recursion = (root)=>{
        if(!root) return;
        let left = root.left,
            right = root.right;
        p.right = root;
        p.left = null;
        p = p.right;
        if(left) recursion(left);
        if(right) recursion(right);
    }
    recursion(root);
};