import {ListNode, TreeNode} from './dataStructure'
//递归+记忆化 超时
// function rob(root: TreeNode | null): number {
//   let map = new Map<TreeNode,number>();
//   const recursion = (root:TreeNode|null|undefined):number=>{
//     if(!root) return 0;
//     else if(!map.has(root)){
//       let temp = root.val;
//       if(root.left){
//         temp = rob(root.left.left)+rob(root.left.right)+temp;
//       }
//       if(root.right){
//         temp = rob(root.right.left)+rob(root.right.right)+temp;
//       }
//       map.set(root,Math.max(rob(root.left)+rob(root.right),temp));
//     }
//     return map.get(root) as number;
//   } 
//   return recursion(root);
// };

function rob(root: TreeNode | null): number {
  if(!root) return 0;
  let f = new Map<TreeNode,number>();
  let g = new Map<TreeNode,number>();
  const afterOrder = (root:TreeNode|null|undefined):void=>{
    if(!root) return;
    if(root?.left) afterOrder(root.left);
    if(root?.right) afterOrder(root.right);
    f.set(root, root.val + (g.get(root.left as TreeNode) || 0) + (g.get(root.right as TreeNode) || 0));
    g.set(root, Math.max(f.get(root.left as TreeNode) || 0, g.get(root.left as TreeNode) || 0) + Math.max(f.get(root.right as TreeNode) || 0, g.get(root.right as TreeNode) || 0));
  }
  afterOrder(root);
  return Math.max(g.get(root)||0,f.get(root)||0)
};