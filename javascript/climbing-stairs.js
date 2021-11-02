/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {    
    let n1 = 1;
    let n2 = 1;
    
    for(let i = 1; i < n; i++ ) {
        let temp = n1 + n2;
        n1 = n2;
        n2 = temp;
    }
    
    return n2;
};