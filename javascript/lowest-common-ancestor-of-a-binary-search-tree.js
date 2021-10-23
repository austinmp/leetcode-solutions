/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let LCA = [];
    dfs(root, p, q, LCA);
    
    return LCA[0];
};

const dfs = (node, p, q, LCA) => {
    if(!node) return [false, false];
    if(LCA.length > 0) return [true, true];;
    
    const [pLeft, qLeft] = dfs(node.left, p, q, LCA);
    const [pRight, qRight] = dfs(node.right, p, q, LCA);
    
    let seenP = pLeft || pRight || node.val === p.val;
    let seenQ = qLeft || qRight || node.val === q.val;
    
    if(seenP && seenQ) {
        console.log(node.val);
        LCA.push(node);
    } 
    return [seenP, seenQ];
}