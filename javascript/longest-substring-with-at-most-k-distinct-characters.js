/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if(k === 0) return 0
    let longest = 0, start = 0, i = 0;
    const dict = new Map();
    while( i < s.length) {
        if(dict.has(s[i])) dict.delete(s[i]);
        dict.set(s[i], i);
        i++;
        if(dict.size > k) {
            let itr = dict.keys();
            let k = itr.next().value
            start = dict.get(k) + 1;
            dict.delete(k);   
        }
        longest = Math.max(longest, i-start);
    }
    return longest;
};

/*
    Key to this problem is to use map as a LRU cache of sorts, so that we can easily back track to the least recently used element once we have more than k distinct elements in a substring.

*/