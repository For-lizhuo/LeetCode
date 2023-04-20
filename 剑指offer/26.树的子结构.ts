import { TreeNode } from "./dataStructure/index";
const recursion = (father:TreeNode | null,child:TreeNode | null):boolean=>{
  if(!child) return true;
  else{
    return father?.val===child.val&&recursion(father.left,child.left)&&recursion(father.right,child.right);
  }
}
function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  if(!A || !B) {
    return false;
  }
  if(recursion(A,B)) return true;
  else{
    return isSubStructure(A.left,B)||isSubStructure(A.right,B);
  } 
};