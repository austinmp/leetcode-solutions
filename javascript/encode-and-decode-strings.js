/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let combinedStrs = '';
    strs.forEach( (str) => combinedStrs += `${str.length}#${str}` ); 
    return combinedStrs;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */

var decode = (s) => {
    const strs = [];
    let strLen = '';
    let i = 0;
    while(i < s.length) {
        if(s[i] === '#') {
            let len = parseInt(strLen);
            let str = s.slice(i + 1, i+1+len);
            strs.push(str);
            i += len + 1;
            strLen = '';
        } 
        if(s[i]) strLen += s[i];
        i++;
    }
    return strs;
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */