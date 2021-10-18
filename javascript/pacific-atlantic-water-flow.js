/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const explored = new Array(heights.length).fill().map(() => new Array(heights[0].length).fill(0));
    const exploredAtlantic = new Array(heights.length).fill().map(() => new Array(heights[0].length).fill(0));    
    const result = [];
    
    for(let i = 0; i < heights[0].length; i++) {
    
        // pacifit top
        if(!explored[0][i]) {
            explored[0][i]++;
            dfs(0,i, heights, explored);   
        }  
        
        // atlantic bottom
        if(!exploredAtlantic[heights.length-1][i]){
            exploredAtlantic[heights.length-1][i]++;
            dfs(heights.length-1,i, heights, exploredAtlantic);      
        }

    }
    
    for(let i = 0; i < heights.length; i++) {
        // pacific left
        if(!explored[i][0]) {
            explored[i][0]++;
            dfs(i, 0, heights, explored);
        }
    
            // atlantic right
        if(!exploredAtlantic[i][heights[0].length-1]){
            exploredAtlantic[i][heights[0].length-1]++;
            dfs(i,heights[0].length-1, heights, exploredAtlantic)
        }
    }
    
    for(let i = 0; i < heights.length; i++) {
        for(let j = 0; j < heights[0].length; j++) {
            if(explored[i][j] && exploredAtlantic[i][j]) result.push([i,j]);
        }
    }
    
    return result;
};

const dfs = (i, j, heights, explored) => {
    if(!explored[i][j]) explored[i][j]++;

    // north
    if(i-1 > -1 && !explored[i-1][j] && heights[i-1][j] >= heights[i][j]) {
        dfs(i-1,j,heights,explored);
    }
    // east 
    if(j+1 < heights[0].length && !explored[i][j+1] && heights[i][j+1] >= heights[i][j]) {
        dfs(i,j+1,heights,explored);
    }
    // south
    if(i+1 < heights.length && !explored[i+1][j] && heights[i+1][j] >= heights[i][j]) {
        dfs(i+1,j,heights, explored);
    }
    // west
    if(j-1 > -1 && !explored[i][j-1] && heights[i][j-1] >= heights[i][j]) {
        dfs(i,j-1,heights, explored);
    }
    
}


