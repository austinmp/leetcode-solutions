/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    
    let a = [0, 1, 1];
    let sum = 2;
    
    if(n < 3) return a[n];
    
    for(let i = 3; i <= n; i++ ){
        let curr = a[i%3];
        a[i%3] = sum;
        sum = sum*2-curr;
    }
    
    return a[n%3];
};