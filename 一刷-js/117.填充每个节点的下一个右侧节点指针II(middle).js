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
   const recursion = (root)=>{
       let temp1,temp2;
       if(!root) return;
       if(!root.left&&!root.right) return;
       if(root.left&&root.right){
           root.left.next = root.right;
       }
       if(root.next){
           temp1 = root.right?root.right:root.left;
           temp2 = root.next.left?root.next.left:root.next.right;
           if(temp1&&temp2){
               temp1.next = temp2;
           }
       }
       if(root.left) recursion(root.left);
       if(root.right) recursion(root.right);
   }
   recursion(root);
   return root;
};