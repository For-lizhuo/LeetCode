function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var sumNumbers = function(root) {
    let res = 0;
    const recursion = (root,path)=>{
        //if(!root) return res+=path;
        if(root.left) recursion(root.left,path+root.val);
        if(root.right) recursion(root.right,path+root.val);
        else return res+= +(path+root.val);
    }
    recursion(root,'0');
    return res;
};