/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

// if(nextAvailable <= 2*i + 1 / 2*i+2)
var serialize = function(root) {
    if(!root) return '';
    const tree = [];
    const dfs = (node) => {
        if(!node){
            tree.push('');
            return;
        } 
        tree.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return tree.join();  
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let tree = data.split(',');
    let index = 0;
    const makeTree = () => {
        if(!tree[index]) {
            index++;
            return null;
        } 
        const root = new TreeNode(tree[index++]);
        root.left = makeTree()
        root.right = makeTree();
        return root;
    }   
    return makeTree();
};


    
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */