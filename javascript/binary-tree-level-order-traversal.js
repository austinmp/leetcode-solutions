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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    
    let solution = [], currLevel = [], Q = [root];
    
    while(Q.length) {
        let nodesOnCurrLevel = Q.length;
        for(let i = 0; i < nodesOnCurrLevel; i++){
            const node = Q.shift();
            currLevel.push(node.val);
            if(node.left) Q.push(node.left);
            if(node.right) Q.push(node.right);
        }
        solution.push(currLevel);
        currLevel = [];
    }
    
    return solution;
};