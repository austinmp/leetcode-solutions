/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const brackets = { 
        ']' :   '[',
        ')' :   '(',
        '}' :   '{'
    }
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.unshift(s[i]);
        } else {
            let openBracket = stack.shift();
            if(!openBracket || openBracket !== brackets[s[i]]) return false;
        }   
    }
    
    return stack.length === 0;
};