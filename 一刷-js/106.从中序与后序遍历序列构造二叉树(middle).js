 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
    let root = new TreeNode();
    let n = inorder.length;
    root.val = postorder[n-1];
    let index = inorder.indexOf(root.val);
    let left = inorder.slice(0,index),
        right = inorder.slice(index+1),
        rootIndex = n-2,nextRoot;
    const recursion = (root,left,right)=>{
        if(rootIndex<0) return;
        nextRoot = postorder[rootIndex];
        let rightIndex = right.indexOf(nextRoot);
        if(rightIndex!=-1){
            let node = new TreeNode();
            node.val = nextRoot;
            root.right = node;
            rootIndex--;
            recursion(root.right,right.slice(0,rightIndex),right.slice(rightIndex+1));
        }
        nextRoot = postorder[rootIndex];
        let leftIndex = left.indexOf(nextRoot);
        if(leftIndex!=-1){
            let node = new TreeNode();
            node.val = nextRoot;
            root.left = node;
            rootIndex--;
            recursion(root.left,left.slice(0,leftIndex),left.slice(leftIndex+1));
        }
    }
    recursion(root,left,right);
    return root;
};