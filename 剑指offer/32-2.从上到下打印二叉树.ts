import { TreeNode } from "./dataStructure/index";
function levelOrder(root: TreeNode | null): number[][] {
  let queue = new Array<TreeNode>(),res = new Array<number[]>(),temp:TreeNode;
  if(!root) return res;
  let level = 1,nextLevel = 0,arr = new Array<number>();
  queue.push(root);
  while(queue.length){
    temp = queue.shift() as TreeNode;
    arr.push(temp.val);
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
    }
  }
  return res;
};