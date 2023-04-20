import { TreeNode } from "./dataStructure/index";
const recursion = (left:TreeNode|null|undefined,right:TreeNode|null|undefined):boolean=>{
  if(!left&&!right) return true;
  else if(!left||!right) return false;
  return left.val===right.val&&recursion(left.left,right.right)&&recursion(left.right,right.left);
}
function isSymmetric(root: TreeNode | null): boolean {
  return recursion(root?.left,root?.right);
};