/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    let components = 0;
    const union = new Array(n).fill(-1);

    edges.forEach( (edge) => {
        let a = edge[0];
        let b = edge[1];
        if( union[a] === -1 && union[b] === -1 ) {
            union[a] = a;
            union[b] = a;
        } else if (union[a] >= 0 && union[b] >= 0 && union[a] != union[b]) {
            const [rootIndexA, componentsInA] = componentSize(a, union);
            const [rootIndexB, componentsInB] = componentSize(b, union);
            if(componentsInA >= componentsInB ) {
                union[rootIndexB] = union[rootIndexA];
            } else if ( componentsInB  > componentsInA) {
                union[rootIndexA] = union[rootIndexB];
            } 
        } else if ( union[a] >= 0 || union[b] >= 0 ) {
            union[a] = union[a] >= 0 ? union[a] : union[b];
            union[b] = union[b] >= 0 ? union[b] : union[a];
        }
    });
    
    for(let i = 0; i < n; i++){
        if(union[i] === i) components++;
        if(union[i] === -1) components++;
    }

    return components;       
};

const componentSize = (index, union) => {
    let size = 1;

    while(index != union[index]) {
        size++;
        index = union[index];
    }
    
    return [index, size];
}