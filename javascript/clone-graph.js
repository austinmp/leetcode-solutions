/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node) return node;
    
    const map = new Map();
    
    recursiveClone(node, map);
    
    return map.get(1);
};

const recursiveClone = (node, map) => {
    const n = new Node(node.val, []);
    map.set(node.val, n);
    
    for(let i = 0; i < node.neighbors.length; i++ ) {
        if(!map.has(node.neighbors[i].val) ) recursiveClone(node.neighbors[i], map)
        let neighbor = map.get(node.neighbors[i].val);
        neighbor.neighbors.push(n);
    }
}

function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};
