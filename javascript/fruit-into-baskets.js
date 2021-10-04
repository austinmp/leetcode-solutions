/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    if(fruits.length <= 2) return fruits.length;

    let sum = 1, type1 = fruits[0], type2 = null;
    let max = Number.NEGATIVE_INFINITY;
    for(let i = 1; i < fruits.length; i++) {
        if(fruits[i] != type1 && type2 == null) {
            type2 = fruits[i];
        }   
        if(fruits[i] != type1 && fruits[i] != type2) {  // must stop picking current types
            type2 = fruits[i];
            type1 = fruits[i-1];
            sum = 1;
            let j = i-1;
            while(fruits[j] === type1 && j > 0) {
                j--;
                sum++;
            } 
        } else {
            sum++;
        }
        max = Math.max(sum, max);
    }
    return max;    
};


/* Standard sliding window / double pointer problem.  Essentially looking for longest subarray with atmost 2 distinct elements.*/