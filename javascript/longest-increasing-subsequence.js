/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let memo = new Array(nums.length).fill(null).map(x => Array(nums.length).fill(null));
    return dynamicLIS(nums, 0, -1, memo);
};

const dynamicLIS = (nums, index, prevIndex, memo) => {
    if(index >= memo.length) return 0;
    
    if(memo[index][prevIndex]) return memo[index][prevIndex];
    
    let option1 = Number.NEGATIVE_INFINITY;
    
    // Don't consider current index
    let option2 = dynamicLIS(nums, index+1, prevIndex, memo);

    // Consider curr index in optimal solution
    if(prevIndex === -1 || nums[index] > nums[prevIndex]) {
        option1 = dynamicLIS(nums, index+1, index, memo) + 1;
    }
    
    
    memo[index][prevIndex] = Math.max(option1, option2);
    return memo[index][prevIndex];
}

// trickiest part about this problem is figuring out how to cache values properly
// We cannot use just a 1D array for cache because at each index we have 2 possible options to consider :
// either the number at index i is in opt or not in opt.  We can identify previous work by caching the current index and previous index pair.