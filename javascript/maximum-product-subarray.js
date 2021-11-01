/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    
    let max = nums[0], currMax = nums[0], currMin = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === 0) {
            max = Math.max(currMax, max); 
            currMax = 0;
            currMin = 0;
        }
        
        let prevMin = currMin;
        currMin = Math.min( nums[i], currMin*nums[i], currMax*nums[i])
        let prevMax  = currMax;
        currMax = Math.max( nums[i], prevMin*nums[i], currMax*nums[i]) 
        max = Math.max(prevMax, currMax, max)
    }
    
    return Math.max(max, currMax)
};