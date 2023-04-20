/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(!root) return [];
    let map = new Map();
    let queue = [{ply:0,node:root}],cur,temp;
    while(queue.length){
        cur = queue.shift();
        if(!map.get(cur.ply)){
            map.set(cur.ply,[cur.node.val]);
        }
        else{
            temp = map.get(cur.ply);
            temp.push(cur.node.val);
            map.set(cur.ply,temp);
        }
        if(cur.node.left){
            queue.push({ply:cur.ply+1,node:cur.node.left});
        }
        if(cur.node.right){
            queue.push({ply:cur.ply+1,node:cur.node.right});
        }
    }
    return Array.from(map.values());
};