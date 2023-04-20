function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minDepth = function(root) {
    const recursion = (root)=>{
        if(!root) return 0;
        if(root.left&&root.right){
            return Math.min(recursion(root.left),recursion(root.right))+1;
        }
        if(root.left) return recursion(root.left);
        else if(root.right) return recursion(root.right);
        else return 1;
    }
    return recursion(root);
};