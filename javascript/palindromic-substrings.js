/**
 * @param {string} s
 * @return {number}
 */

var countSubstrings = function(s) {
    let numPalindromes = s.length;
    
    // get even length palindrones by checking first char to right of i
    for(let i = 0; i < s.length-1; i++) {
        if(s[i] === s[i+1]) {
            numPalindromes += addAndExpand(i,i+1,s);
        }
    }
    
    // get odd length palindromes by checking chars on either side of i
    for(let i = 1; i < s.length-1; i++) {
        if(s[i-1] === s[i+1]) {
            numPalindromes += addAndExpand(i-1,i+1,s);
        }
    }
    
    return numPalindromes;    
};

const addAndExpand = (i, j, s) => {
    let newPalindromes = 0;
    while(s[i] === s[j] && i > -1 && j < s.length) {
        newPalindromes++;
        i--;
        j++;
    }
    return newPalindromes;
}


// Palindromes are either of even length or of odd length
// We can imagine that they start at an index in the array or in between indexes in an array. For example : ab | ba (starts between 1 and 2) or aba (starts on index 1)
// We can generate these base cases then expand outward
