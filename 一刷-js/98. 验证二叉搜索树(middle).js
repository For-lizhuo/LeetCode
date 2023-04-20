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
//判断中序遍历序列是否递增
 var isValidBST = function(root) {
    let midOrderRes = [];
    const midOrderTraversal = (root)=>{
        if(!root) return;
        if(root.left) midOrderTraversal(root.left);
        midOrderRes.push(root.val);
        if(root.right) midOrderTraversal(root.right);
    }
    midOrderTraversal(root);
    for(let i=0;i<midOrderRes.length-1;i++){
        if(midOrderRes[i]>=midOrderRes[i+1]) return false;
    }
    return true;
};
//递归
var isValidBST = function(root) {
    const recursion = (root,lower,upper)=>{
        if(!root) return true;
        if(root.val<=lower||root.val>=upper) return false;
        else return recursion(root.left,lower,root.val)&&recursion(root.right,root.val,upper);
    }
    return recursion(root,-Infinity,Infinity);
};