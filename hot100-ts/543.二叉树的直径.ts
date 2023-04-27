import { TreeNode } from "./dataStructure";
function diameterOfBinaryTree(root: TreeNode | null): number {
  let map = new Map<TreeNode,number>();
  const getHeight = (root):number=>{
    if(!root) return 0;
    if(!map.has(root)){
      let height = Math.max(getHeight(root.left),getHeight(root.right))+1;
      map.set(root,height);
    }
    return map.get(root) as number;
  }
  const recursion = (root:TreeNode|null):number=>{
    if(!root) return 0;
    if(root.left&&root.right) return Math.max(getHeight(root.left) + getHeight(root.right),recursion(root.left),recursion(root.right)); 
    if(root.left) return Math.max(recursion(root.left),getHeight(root.left));
    if(root.right) return Math.max(recursion(root.right),getHeight(root.right));
    return 0;
  }
  return recursion(root);
};