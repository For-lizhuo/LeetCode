import { TreeNode } from "./dataStructure/index";
/*
 * Encodes a tree to a single string.
 */


function serialize(root: TreeNode | null): string {
  if(!root) return 'N';
  const left = serialize(root?.left);
  const right = serialize(root?.right);
  return root.val+','+left+','+right;
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  let arr = data.split(',');
  let index = 0;
  function buildTree(): TreeNode | null {
    if(index>=arr.length) return null;
    let head = arr[index++];
    if(head==='N') return null;
    const root = new TreeNode(Number(head));
    root.left = buildTree();
    root.right = buildTree();
    return root;
  };
  return buildTree();
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */