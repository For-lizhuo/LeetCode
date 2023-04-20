/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    const recursion = (root,target)=>{
        if(!root&&!target) return true;
        if(!root&&target) return false;
        if(!root.left&&!root.right) return root.val==target;
        if(root.left&&root.right) return recursion(root.left,target-root.val)||recursion(root.right,target-root.val);
        if(root.left) return recursion(root.left,target-root.val);
        if(root.right) return recursion(root.right,target-root.val);
    }
     return root==null?false:recursion(root,targetSum);
};