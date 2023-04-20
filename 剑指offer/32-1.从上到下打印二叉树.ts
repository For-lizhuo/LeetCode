import { TreeNode } from "./dataStructure/index";
function levelOrder(root: TreeNode | null): number[] {
  let queue = new Array<TreeNode>(),res = new Array<number>(),temp:TreeNode;
  if(!root) return res;
  queue.push(root);
  while(queue.length){
    temp = queue.shift() as TreeNode;
    res.push(temp.val);
    if(temp.left) queue.push(temp.left);
    if(temp.right) queue.push(temp.right);
  }
  return res;
};