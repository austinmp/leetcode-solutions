/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    if(n === 0 || n-1 !== edges.length ) return false;
    if(edges.length === 0) return true;
    
    let components = new Array(n).fill(-1);

    edges.forEach( ([a, b]) => {
        if(components[a]=== -1 && components[b] === -1) {
            components[a] = a;
            components[b] = a
        } else if (components[a] === -1) {
            components[a] = root(b, components);
        } else if (components[b] === -1) {
            components[b] = root(a, components);
        } else {
            components[root(b, components)] = root(a, components); 
        }
    });
    
    let connectedComponents = 0;
    for(let i = 0; i < components.length; i++) {
        if(components[i] === -1) return false;
        if(components[i] === i) connectedComponents++;
        if(connectedComponents > 1) return false;
    } 
    
    return true;
};

const root = (i, components ) => {
    while(i != components[i]) {
        components[i] = components[components[i]] // point to grandparent instead of parent
        i = components[i];
    }
    return i;    
}