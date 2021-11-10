
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {    
    let left = 0, right = height.length-1, max = 0;
    
    while(left < right) {
        max = Math.max(max, (Math.min(height[left], height[right])*(right-left) ));
        if(height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
    }
    
    return max;
};


/*
 Idea / Proof:

    1. The widest container (using first and last line) is a good candidate, because of its width. Its water level is the height of the smaller one of first and last line.
    2. All other containers are less wide and thus would need a higher water level in order to hold more water.
    3. The smaller one of first and last line doesn't support a higher water level and can thus be safely removed from further consideration.
    4. If a[left] === a[right] you just need to move one or both pointers by one step. Indeed, you cannot get an increase until you "move on" from both ends.
        In this case we have already considered and stored the max possible area for this height as a min/max boundry, so it doesn't matter which pointer we move.
*/


