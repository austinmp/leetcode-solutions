/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const index = new Map();
    for(let i = 0; i < inorder.length; i++) {
        index.set(inorder[i], i);
    }
    
    let i = 0;
    const makeTree = function(start, end) {
        if(start > end) return null;
        
        let currRoot = new TreeNode(preorder[i]);
        i++;
        
        currRoot.left = makeTree(start, index.get(currRoot.val) - 1); 
        currRoot.right = makeTree(index.get(currRoot.val) + 1, end);
        
        return currRoot;
    }
    
    return makeTree(0, inorder.length-1);
}; 