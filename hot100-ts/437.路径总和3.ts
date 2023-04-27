import {TreeNode} from './dataStructure/index';
function pathSum(root: TreeNode | null, targetSum: number): number {
  let res = 0;
  const recursion = (root:TreeNode|null,target:number):void=>{
    if(!root) return;
    if(root.val===target){
      res++;
    }
    if(root.left) recursion(root.left,target-root.val);
    if(root.right) recursion(root.right,target-root.val);
  }
  const inOrder = (root:TreeNode|null):void=>{
    if(!root) return;
    if(root.left) inOrder(root.left);
    recursion(root,targetSum);
    if(root.right) inOrder(root.right);
  }
  inOrder(root);
  return res;
};