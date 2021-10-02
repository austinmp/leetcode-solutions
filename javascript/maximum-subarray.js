/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let currMax = Number.NEGATIVE_INFINITY;
    let sum = Number.NEGATIVE_INFINITY;
    nums.forEach( (num) => {
        sum = Math.max(num, sum + num);
        currMax = Math.max(currMax, sum);
    });
    
    return currMax
};