import { TreeNode } from "./dataStructure/index";

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  let res = new TreeNode();
  if(preorder.length===0||inorder.length===0){
    return null;
  }
  let index = inorder.indexOf(preorder[0]);
  let leftChild = inorder.slice(0,index);
  let righChild = inorder.slice(index+1);
  res.val = preorder[0];
  res.left = buildTree(preorder.slice(1,index+1),leftChild);
  res.right = buildTree(preorder.slice(index+1),righChild);
  return res;
};