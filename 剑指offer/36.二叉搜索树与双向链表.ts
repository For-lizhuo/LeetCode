export class Node {
  val: number
  left: Node | null
  right: Node | null
  constructor(val?: number, left?: Node, right?: Node) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function treeToDoublyList(root:Node):Node|null {
  if(!root) {
    return null;
  }
  let arr = new Array<Node>();
  const inOrder = (root:Node):void=>{
    if(root.left) inOrder(root.left);
    arr.push(root);
    if(root.right) inOrder(root.right);
    return;
  }
  inOrder(root);
  for(let i=0;i<arr.length;i++){
    arr[i].right = arr[(i+1)%arr.length];
    arr[(i+1)%arr.length].left = arr[i];
  }
  return arr[0];
};