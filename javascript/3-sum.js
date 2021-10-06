/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let triplets = [];
    if(nums.length < 3) return triplets;
    
    nums.sort( (a,b) => a-b);
    
    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] === nums[i-1]) continue;
        let j = i+1;
        let k = nums.length-1;
        while(j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                let triplet = [nums[i], nums[j], nums[k]];
                triplets.push(triplet);
                j++;
                k--;     
                while(j < k && nums[j] === nums[j-1]) {
                    j++;
                }      
            } else if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } 
        }
        
    }   
    return triplets;
};