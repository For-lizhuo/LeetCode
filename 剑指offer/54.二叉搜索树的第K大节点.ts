import { TreeNode } from "./dataStructure/index";
function kthLargest(root: TreeNode | null, k: number): number {
  let serial = 0,res:number = 0;
  const inOrder = (root:TreeNode|null):void=>{
    if(root?.right) inOrder(root.right);   
    serial++;
    if(serial===k){
      res = root!.val;
    }
    if(root?.left) inOrder(root.left);
  }
  inOrder(root);
  return res;
};