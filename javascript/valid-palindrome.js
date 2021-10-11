/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let start = 0, end = s.length-1;
    while(start < end) {
        while(start < end && !isAlphaChar(s[start])) start++;
        while(end > start && !isAlphaChar(s[end])) end--;
        if(s[start].toLowerCase() != s[end].toLowerCase()) return false;
        start++;
        end--;
    }   
    return true;    
};

const isAlphaChar = (c) => {
    let regex = /[A-Za-z0-9]/;
    if(c.match(regex)) return true;
    return false;
}