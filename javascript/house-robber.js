/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let memo = new Array(nums.length).fill(0);
    for(let i = 0; i < nums.length; i++) {
        let adjacentHouse = memo[i-1] || 0;
        let twoAway = memo[i-2] || 0;
        memo[i] = Math.max(nums[i] + twoAway, adjacentHouse);
    }   
    return memo[nums.length-1];
};