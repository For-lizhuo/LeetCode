function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    if(!root) return [];
    let res = [];
    const recursion = (root,target,path)=>{
        if(!root&&!target) return res.push([...path]);
        if(!root&&target) return;
        if(!root.left&&!root.right){
            if(root.val==target){
                path.push(root.val);
                return res.push([...path]);
            }
            else return;
        }
        if(root.left) recursion(root.left,target-root.val,[...path,root.val]);
        if(root.right) recursion(root.right,target-root.val,[...path,root.val]);
    }
    recursion(root,targetSum,[]);
    return res;
};