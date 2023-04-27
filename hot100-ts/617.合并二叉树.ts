import {TreeNode} from './dataStructure/index'
function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if(!root1&&!root2) return null;
  else if(root1&&root2){
    root1.val = root1.val+root2.val;
    root1.left = mergeTrees(root1.left,root2.left);
    root1.right = mergeTrees(root1.right,root2.right);
    return root1;
  }
  else if(root1){
    return root1;
  }
  else {
    return root2;
  }
};