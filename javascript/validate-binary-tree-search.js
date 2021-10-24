/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    
    const dfs = (node, min, max) => {
        if(!node) return true;
        
        if(node.val <= min || node.val >= max) return false;
        
        // left node must be greater than smallest seen in subtree, but less than parent
        const isValidLeft = dfs(node.left, min, node.val);
        
        // right node must be greater than curr node val, no limit on max value
        const isValidRight = dfs(node.right, node.val, max);
        
        return isValidLeft && isValidRight; 
    }
    
    return dfs(root, Number.NEGATIVE_INIFINITY, Number.POSITIVE_INFINITY);   
};


/*
    There's several ways of doing this problem, this method is one of the cleanest. Here, we are determining if a tree is valid by passing values down the tree,
    and letting each node decide if it is valid. Another (less clean) way of doing this is recursing to bottom of tree, then letting the parent node, determing 
    if its leaf nodes are valid by having the children return the min/max seen so far.
*/