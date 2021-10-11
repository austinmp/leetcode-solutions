/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {    
    let chars = new Array(26).fill(0);    
    let longest = s.length >= t.length ? s : t;
    
    for(let i = 0; i < longest.length; i++){
        if(s[i]) chars[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        if(t[i]) chars[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    
    for(let i = 0; i < chars.length; i++) {
        if(chars[i] != 0) return false;
    }
     
    return true;
};


/*

What if the inputs contain unicode characters? How would you adapt your solution to such case?

Use a hash table instead of a fixed size counter. Imagine allocating a large size array to fit the entire range of unicode characters, 
which could go up to more than 1 million. A hash table is a more generic solution and could adapt to any range of characters.
*/