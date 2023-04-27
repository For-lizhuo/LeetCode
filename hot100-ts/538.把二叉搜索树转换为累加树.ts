import {TreeNode} from './dataStructure/index'
// function convertBST(root: TreeNode | null): TreeNode | null {
//   let arr = new Array<TreeNode>();
//   const inOrder = (root:TreeNode|null):void=>{
//     if(!root) return;
//     if(root.left) inOrder(root.left);
//     arr.push(root);
//     if(root.right) inOrder(root.right);
//   }
//   inOrder(root);
//   let sum = 0;
//   for(let i=arr.length-1;i>=0;i--){
//     sum += arr[i].val;
//     arr[i].val = sum;
//   }
//   return root;
// };
function convertBST(root: TreeNode | null): TreeNode | null {
  let sum = 0;
  const inOrder = (root:TreeNode|null):void=>{
    if(!root) return;
    if(root.right) inOrder(root.right);
    sum += root.val;
    root.val = sum;
    if(root.left) inOrder(root.left);
  }
  inOrder(root);
  return root;
};