import { TreeNode } from "./dataStructure/index";
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if(!root) return null;
  let map = new Map<TreeNode,number>();
  let value = 0;
  const midOrder = (root:TreeNode):void=>{
    if(root.left) midOrder(root.left);
    map.set(root,value++);
    if(root.right) midOrder(root.right);
  }
  midOrder(root);
  let small = Math.min(<number>map.get(<TreeNode>p),<number>map.get(<TreeNode>q));
  let big = Math.max(<number>map.get(<TreeNode>p),<number>map.get(<TreeNode>q));
  while(root){
    if(big<(map.get(root) as number)){
      root = root.left;
    }
    else if(small>(map.get(root) as number)){
      root = root.right;
    }
    else return root;
  }
  return null;
};