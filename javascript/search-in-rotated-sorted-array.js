/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length-1;
    
    while(left <= right) {
        let mid = Math.floor((left + right)/2);
        if(nums[left] === target) return left;
        if(nums[right] === target) return right;
        if(nums[mid] === target) return mid;
        
        if(nums[left] <= nums[mid] && target > nums[left] && target < nums[mid]) {
            right = mid -1;
        } else if (nums[left] >= nums[mid] && (target > nums[left] || target < nums[mid]) ) {
            right = mid-1;   
        } else if(nums[right] <= nums[mid] && (target > mid || target < nums[right]) ) {
            left = mid+1;
        } else if (nums[right] >= nums[mid] && target > nums[mid] && target < nums[right]) {
            left = mid+1;
        } else {
            return -1;
        }  
    }      
    return -1; 
};