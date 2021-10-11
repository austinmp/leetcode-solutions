/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let numProvinces = 0;
    let explored = new Array(isConnected.length).fill(-1);
    
    for(let i = 0; i < isConnected.length; i++) {
        if(explored[i] === -1) {
            explored[i] = 1;
            numProvinces++;
            dfs(i, isConnected, explored);
        }
    }
    return numProvinces;
};

const dfs = (i, matrix, explored) => {
    for(let j = 0; j < matrix[i].length; j++) {
        if(matrix[i][j] === 1 && explored[j] === -1) {
            explored[j] = 1;
            dfs(j, matrix, explored);
        }   
    }
}

/*
    In this problem we are tasked with finding the number of connected components in a graph. The union find algorithm can also be used here,
    however, the solution is more complicated with little performance increase.

    Psuedo Code :
        - Initialize explored array of length n filled with -1's.
        - For every node (every row in the matrix), if it has not been explored yet :
            - mark it as explored
            - increase province count
            - explore using dfs all of its edges

    *Note * We are only increasing the province count outside of the dfs call, since any node we find during the dfs must be
    connected to the original parent node. Once we return from the dfs, any node that is among the connected components will be
    marked explored, and will not be considered again in the outer loop.
    
    *IMPORTANT* We must mark a node as explored before entering the dfs to prevent infinite loop.

    Runtime : We explore all nodes/edges in n x n matrix, so O(n^2);

    Memory: O(n) extra memory is used for the explored array.
*/ 