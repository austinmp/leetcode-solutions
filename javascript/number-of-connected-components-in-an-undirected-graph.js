/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
 var countComponents = function(n, edges) {
    let componentsCount = 0;
    if(n < 2) return n;
    
    const components = new Array(n);
    
    for(let i = 0; i < n; i++) components[i] = i;
    
    edges.forEach( ([a,b]) => components[root(a, components)] = root(b, components) );
    
    for(let i = 0; i < n; i++) if(components[i] === i) componentsCount++;
    
    return componentsCount; 
};

const root = (i, components) => {
    while(i != components[i]) {
        components[i] = components[components[i]]
        i = components[i];
    }
    return i;
}