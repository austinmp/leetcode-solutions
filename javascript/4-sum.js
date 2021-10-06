/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let solution = [];
    if(nums.length < 4) return solution;
    nums.sort( (a,b) => a-b);

    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] === nums[i-1]) continue;
        let quads = threeSum(nums, target-nums[i], i);
        quads.forEach( quad => solution.push(quad));
    }
    return solution;
    
};

const threeSum = (nums, target, startIndex) => {  
    let quads = [];
    let prev;
    for(let i = startIndex + 1; i < nums.length; i++) {
        if(nums[i] === prev) {
            continue;
        } 
        prev = nums[i]
        let j = i+1;
        let k = nums.length-1;
        while(j < k && j < nums.length) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === target) {
                let quad = [nums[startIndex], nums[i], nums[j], nums[k]];
                quads.push(quad);
                j++;
                k--;     
                while(j < k && nums[j] === nums[j-1]) {
                    j++;
                }      
            } else if (sum < target) {
                j++;
            } else if (sum > target) {
                k--;
            } 
        }
        
    }   
    return quads;
};