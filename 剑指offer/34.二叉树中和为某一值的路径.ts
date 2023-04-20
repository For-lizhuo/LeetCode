import { TreeNode } from "./dataStructure/index";

function pathSum(root: TreeNode | null, target: number): number[][] {
  if(!root) return [];
  let res = Array<number[]>();
  const recursion = (path:number[],target:number,node:TreeNode):void=>{
    if(!node.left&&!node.right&&target===node.val) res.push([...path,target]);
    else{
      if(node.left) recursion([...path,node.val],target-node.val,node.left);
      if(node.right) recursion([...path,node.val],target-node.val,node.right);
      return;
    }
  }
  recursion([],target,root);
  return res;
};