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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const nums = [];
    const inorder = (node) => {
        if(node.left) inorder(node.left);
        nums.push(node.val);
        if(node.right) inorder(node.right);
    }
    inorder(root); 
    return nums[k-1];
};