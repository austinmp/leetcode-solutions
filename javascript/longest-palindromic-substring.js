/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length < 2) return s;
    
    let longestPalindrome = '';
    
    // get even length palindrones by checking first char to right of i
    for(let i = 0; i < s.length-1; i++) {
        if(s[i] === s[i+1]) {
            let currPalindrome = addAndExpand(i,i+1,s);
            longestPalindrome = currPalindrome.length > longestPalindrome.length ? currPalindrome : longestPalindrome;
        }
    }
    
    // get odd length palindromes by checking chars on either side of i
    for(let i = 1; i < s.length-1; i++) {
        if(s[i-1] === s[i+1]) {
            let currPalindrome = addAndExpand(i-1,i+1,s);
            longestPalindrome = currPalindrome.length > longestPalindrome.length ? currPalindrome : longestPalindrome;
        }
    }
    
    if(!longestPalindrome) return s[0]; // handles cases like 'ba' where we dont have a palindrome of len >= 2
    
    return longestPalindrome;    
};

const addAndExpand = (i, j, s) => {
    let palindrome = '';
    while(s[i] === s[j] && i > -1 && j < s.length) {
        palindrome = s.substring(i, j+1);
        i--;
        j++;
    }
    return palindrome;
}