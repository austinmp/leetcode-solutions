/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let min = Number.POSITIVE_INFINITY;
    let isSolution = false;
    let left = 0, sum = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] >= target) return 1;
        sum += nums[i];
        if(sum >= target) {
            isSolution = true;
            while(sum - nums[left] >= target ) {
                sum -= nums[left];
                left++;
            } 
            min = Math.min(min, i - left + 1);
        } 
    }
    if(!isSolution) return 0;
    return min;
};

// Uses 2 pointer / sliding window pattern