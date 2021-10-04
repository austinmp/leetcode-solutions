/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function(length, updates) {
    let arr = new Array(length).fill(0);
    updates.forEach( ([start, end, inc]) => { 
        arr[start] += inc;
        if(end + 1 < length) arr[end + 1] -= inc;
    });
    
    let runningTotal = 0;
    for(let i = 0; i < length; i++) {
        runningTotal += arr[i];
        arr[i] = runningTotal;
    }   

    return arr;
};


/* The trick here is that we don't have to update all indexes between start and end , we can mark the start with +inc, 
    and the end of the increment range at index=end+1 with -inc. The +inc adds to all future array indexes, however, -inc cancels them out in all future array indexes not in the update range.

    Let the number of update = k, then the naive approach is  O(n * k), and nearly O(n^2) in the worst case, since we could update the entire array of size n, k times, and each update could span the entirety of the array.
    Using the running total method, each of the k updates takes place in constant time, since we only update 2 elements at a time (start and end). So we get a running time of O (n + k).
*/

