/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    const keys = set.keys();
    let longest = 0;
    
    while(set.size > 0) {
        longest = Math.max(longest, getLongestSequence(keys.next().value, set, true, true));
    }
    
    return longest;  
};

const getLongestSequence = (num, set, shouldSearchLow, shouldSearchHi) => {

    if(!set.has(num)) return 0;

    set.delete(num);

    let low = 0, hi = 0;
    if(shouldSearchLow) {
        low = getLongestSequence(num-1, set, true, false); // came from larger number, only check smaller nums than curr num
    } 

    if(shouldSearchHi) {
        hi = getLongestSequence(num + 1, set, false, true); // came from smaller number, only check larger nums than curr num
    }

    return low+hi+1;
}