import { TreeNode } from "./dataStructure/index";
function maxDepth(root: TreeNode | null): number {
  if(!root) return 0;
  if(root.left&&root.right) return Math.max(maxDepth(root.left),maxDepth(root.right))+1;
  if(root.left) return maxDepth(root.left)+1;
  else if(root.right) return maxDepth(root.right)+1;
  else return 1;
};