/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    if(!words.length) return '';
    if(words.length === 1) return words[0];
    
    const sorted = '';
    const matrix = new Array(26).fill().map( () => new Array(26).fill(0));
    const frontier = new Set();
    
    for(let i = 0; i < words.length-1; i++) {
        const isValid = compareAndFillMatrix(words[i], words[i+1], matrix);
        if(!isValid) return '';
    }
    

    return sorted;
};

const compareAndFillMatrix(s1, s2, matrix, frontier) {
    let doneComparing = false;
    for(let i = 0; i < s1.length; i++) {
        if(!doneComparing && s2[i]) {
            if(s1[i] !== s2[i]) {
                doneComparing = true;
                matrix[s1.charCodeAt(i) - 'a'.charCodeAt(0)][s2.charCodeAt(i) - 'a'.charCodeAt(0) ] = 1
            }
            
        } else {
            frontier.set(s[i], (fontier.get(s[i]) || 0) ); 
        }
        // in degree might get set inside the if statement
            
    }
}



alien dictionary