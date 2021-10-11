/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let chars = new Array(26).fill(0);
    let start = 0, max = 0, mostFrequentCharCount = null;
    
    for(let i = 0; i < s.length; i++) {
        let currCharIndex = s.charCodeAt(i) - 'A'.charCodeAt(0)
        chars[currCharIndex]++;
        mostFrequentCharCount = Math.max(mostFrequentCharCount, chars[currCharIndex]);

        let substringLength = i-start+1;
        if(substringLength - mostFrequentCharCount > k) { // We have used up all of our replacements
            let startCharIndex = s.charCodeAt(start) - 'A'.charCodeAt(0);
            chars[startCharIndex]--;
            start++;
        }  
        max = Math.max(max, i-start+1);
    }
    return max;
};


/*

The problem says that we can make at most k changes to the string (any character can be replaced with any other character). So, let's say there were no constraints like the k. Given a string convert it to a string with all same characters with minimal changes. The answer to this is

length of the entire string - number of times of the maximum occurring character in the string

Given this, we can apply the at most k changes constraint and maintain a sliding window such that

(length of substring - number of times of the maximum occurring character in the substring) <= k



The key to this problem is the realization that we only need to track the most frequent character in a given sequence, along with the current sequence length.
Most frequentCharCount is intelligently updating on every iteration, keeping a rolling total as we go.
We can count the number of replacements left from the formula : (sequence length - most frequent char count )
If we have used up all replacements, then we move start to the right one index, and subtract 1 from its charIndex
The size of our window never shrinks.
*/