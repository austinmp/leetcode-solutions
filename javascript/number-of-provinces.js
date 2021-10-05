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