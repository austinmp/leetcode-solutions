/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adjList = new Array(numCourses).fill().map( () => new Array(0));
    const inDegree = new Map();
    const noPreReqs = [];
    const sorted = [];
    
    for(let i = 0; i < numCourses; i++) inDegree.set(i, 0);

    prerequisites.forEach( ([a,b]) => {    
        adjList[b].push([a,b]);
        inDegree.set(a, inDegree.get(a)+1);
    });
    
    for( const [node, degree] of inDegree.entries()) if(degree === 0) noPreReqs.push(node);

    if(noPreReqs.length === 0) return false;
    
    while(noPreReqs.length > 0) {
        let n = noPreReqs.shift();
        sorted.push(n);
        const edges = adjList[n];
        while(edges.length > 0) {
            const [a, b] = edges.shift();
            inDegree.set(a, inDegree.get(a)-1);
            if(inDegree.get(a) === 0) noPreReqs.push(a);
        }
    }
    
    return sorted.length === numCourses;
};



/*

    This solution uses Kahn's Topological sort algorithm, its a bit of a memory hog, so I definitely need to optimize it in the future.
    1. Find all nodes with no incoming edges using a hashmap, put them in a list S (if S is empty, return false this means we have no where to start)
    2. While doing the above, sort the edges into an Adjacency list
    3. While S is not empty:
        - pop current node n
        - add it to sorted set R
        - for all outgoing edges from n to m in adjList[n]
            - pop edge m from adj list / remove edge from graph
            - subtract 1 from m's in degree count
            - if m's in degree === 0, it has no pre reqs/ incoming edges, so we add it to S

    4. If every pre req is met, R.length will === num courses
        return (R.length === numCourses)



*/