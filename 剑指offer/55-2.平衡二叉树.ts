import { TreeNode } from "./dataStructure/index";
function isBalanced(root: TreeNode | null): boolean {
  const maxDepth = (root:TreeNode|null):number=>{
    if(!root) return 0;
    let left = maxDepth(root?.left);
    let right = maxDepth(root?.right);
    return Math.max(left,right)+1;
  }
  if(!root) return true;
  if(Math.abs(maxDepth(root.left)-maxDepth(root.right))>1) return false;
  else return isBalanced(root.left)&&isBalanced(root.right);
};