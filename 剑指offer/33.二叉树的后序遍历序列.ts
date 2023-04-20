function verifyPostorder(postorder: number[]): boolean {
  //后序遍历：左右根
  if(postorder.length<=1) return true;
  let root = postorder[postorder.length-1];
  let index = 0;
  while(index<postorder.length-1&&postorder[index]<root){
    index++;
  }
  let leftChild = postorder.slice(0,index);
  let rightChild = postorder.slice(index,postorder.length-1);
  //判断右儿子是否都小于根
  for(let i=0;i<rightChild.length;i++){
    if(rightChild[i]<root) return false;
  }
  return verifyPostorder(leftChild)&&verifyPostorder(rightChild);
};