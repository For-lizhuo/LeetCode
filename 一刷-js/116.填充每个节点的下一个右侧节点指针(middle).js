function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
}

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    if(!root) return null;
    let stack = [root],temp,node,pre;
    while(stack){
        temp = stack.length;
        for(let i=0;i<temp;i++){
            node = stack.shift();
            if(i) pre.next = node;
            pre = node;
            if(node.left){
                stack.push(node.left);
                stack.push(node.right);
            }
        }
        console.log(stack)
    }
    return root;
};
//利用上一层的next指针，省去栈的空间
var connect = (root)=>{
    if(!root) return null;
    const recursion = (root)=>{
        if(!root) return;
        if(root.left){
            root.left.next = root.right;
            if(root.next){
                root.right.next = root.next.left;
            }
            recursion(root.left);
            recursion(root.right);
        }
    }
    recursion(root);
}