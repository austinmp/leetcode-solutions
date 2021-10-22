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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    const subRoots = [];
    findSubRoots(root, subRoot.val, subRoots);
    
    while(subRoots.length) {
        const currRoot = subRoots.shift();
        if(isSameTree(currRoot, subRoot)) return true;
    }
    return false;
};

const findSubRoots = (root, subRootVal, subRoots) => {
    if(!root) return;
    if(root.val === subRootVal) subRoots.push(root);
    findSubRoots(root.left, subRootVal, subRoots);
    findSubRoots(root.right, subRootVal, subRoots);
}

const isSameTree = (a, b) => {
    if(!a && !b) return true;
    if( (a && !b) || (!a && b) || (a.val !== b.val) ) return false;
    return (isSameTree(a.left, b.left) && isSameTree(a.right, b.right));
}