/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    return dfs(0, nums);
};

const dfs = (index, nums) => {
    if(index >= nums.length-1) return true;
    for(let i = nums[index]; i >= 1; i--) {
        if(nums[index + i] != -1) {
            let canFinish = dfs(index+i, nums);
            if(canFinish) return true;
        }  
    }
    nums[index] = -1;
    return false;
}