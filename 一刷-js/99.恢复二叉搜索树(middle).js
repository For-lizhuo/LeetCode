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
 * @return {void} Do not return anything, modify root in-place instead.
 */
//显式中序-借助辅助数组
 var recoverTree = function(root) {
    let midOrderRes = [],change = [];
    const midOrderTraversal = (root)=>{
        if(!root) return;
        if(root.left) midOrderTraversal(root.left);
        midOrderRes.push(root.val);
        if(root.right)midOrderTraversal(root.right);
    }
    midOrderTraversal(root);
    let increSeq = [...midOrderRes].sort((a,b)=>a-b);
    for(let i=0;i<increSeq.length;i++){
        if(increSeq[i]!=midOrderRes[i]) change.push(midOrderRes[i]);
    }
    const midOrderChange = (root)=>{
        if(!root) return;
        if(root.left) midOrderChange(root.left);
        if(root.val==change[0]) root.val = change[1];
        else if(root.val==change[1]) root.val = change[0];
        if(root.right)midOrderChange(root.right);
    }
    midOrderChange(root)
};

//隐式中序
var recoverTree = function(root) {
    let change = [null,null],prev=-Infinity;
    const midOrderTraversal = (root)=>{
        if(!root) return;
        if(root.left) midOrderTraversal(root.left);
        if(root.val<prev){
            if(!change[0]){
                change[0] = prev;
            }
            change[1] = root.val; 
        }
        prev = root.val;
        if(root.right)midOrderTraversal(root.right);
    }
    midOrderTraversal(root,-Infinity);
    
    const midOrderChange = (root)=>{
        if(!root) return;
        if(root.left) midOrderChange(root.left);
        if(root.val==change[0]) root.val = change[1];
        else if(root.val==change[1]) root.val = change[0];
        if(root.right)midOrderChange(root.right);
    }
    midOrderChange(root)
};