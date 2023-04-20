import { TreeNode } from "./dataStructure/index";
function mirrorTree(root: TreeNode | null): TreeNode | null {
  if(!root) return root;
  let left = mirrorTree(root.right),
  right = mirrorTree(root.left);
  root.left = left;
  root.right = right;
  return root;
};