import { TreeNode } from "./dataStructure/index";
type Order = 'left->right'|'right->left';
function levelOrder(root: TreeNode | null): number[][] {
  let queue = new Array<TreeNode>(),res = new Array<number[]>(),temp:TreeNode;
  if(!root) return res;
  let level = 1,nextLevel = 0,arr = new Array<number>(),order:Order = 'left->right';
  queue.push(root);
  while(queue.length){
    temp = queue.shift() as TreeNode;
    if(order==='left->right'){
      arr.push(temp.val);
    }
    else if(order==='right->left'){
      arr.unshift(temp.val);
    }
    level--;
    if(temp.left){
      queue.push(temp.left);
      nextLevel++;
    } 
    if(temp.right){
      queue.push(temp.right);
      nextLevel++;
    }
    if(level===0){
      level=nextLevel;
      nextLevel=0;
      res.push([...arr]);
      arr = new Array<number>();
      order = order==='left->right'?'right->left':'left->right';
    }
  }
  return res;
};