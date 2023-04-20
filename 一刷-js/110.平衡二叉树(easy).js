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
 * @param {TreeNode} root
 * @return {boolean}
 */
//从上至下递归
 var isBalanced = function(root) {
    const getHeight = (root)=>{
        if(!root) return 0;
        if(root.left&&root.right) return Math.max(getHeight(root.left),getHeight(root.right))+1;
        else if(root.left) return getHeight(root.left)+1;
        else return getHeight(root.right)+1;
    }
    const recursion = (root)=>{
        if(!root) return true;
        if([1,-1,0].includes(getHeight(root.left)-getHeight(root.right))){
            return recursion(root.left)&&recursion(root.right);
        }
        else return false;
    }
    return recursion(root);
};
//从下往上递归
var isBalanced = function(root) {
    const recursion = (root)=>{
        if(!root) return 0;
        let left = recursion(root.left);
        let right = recursion(root.right);
        if(left==-1||right==-1||Math.abs(left-right)>1) return -1;
        else{
            return Math.max(left,right)+1;
        }
    }
    return recursion(root)==-1?false:true;
};