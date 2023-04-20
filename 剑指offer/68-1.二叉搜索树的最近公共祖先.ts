import { TreeNode } from "./dataStructure/index";
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  let small,big:number;
  p!.val>q!.val?(big = p!.val,small = q!.val):(big = q!.val,small = p!.val);
  while(root){
    if(big<root.val){
      root = root.left;
    }
    else if(small>root.val){
      root = root.right;
    }
    else return root;
  }
  return null;
};