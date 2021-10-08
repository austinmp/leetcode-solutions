var lengthOfLongestSubstring = function(s) {
    let chars = new Array(127).fill(null);
    let start = 0, curr = 0, longest = 0;

    for(let i = 0; i < s.length; i++) {
        let index = s.charCodeAt(i);
        if(chars[index] != null && chars[index] >= start) { //seen this char in current sequence
            longest = Math.max(curr, longest);
            start = chars[index] + 1;
            curr = i - start + 1;
        } else {
            curr++;
            longest = Math.max(curr, longest);
        }
        chars[index] = i;
    }
    return longest;
};