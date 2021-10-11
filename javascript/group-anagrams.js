/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
    const map = new Map();
    
    strs.forEach( (s) => {
        let hash = 1;
        for(let i = 0; i < s.length; i++) {
           hash = hash*primes[s.charCodeAt(i) - 'a'.charCodeAt(0)];
        }
        let arr = map.get(hash);
        if(arr) {
            arr.push(s);
        } else {
            map.set(hash, [s]);
        }
   });
    
    const solution = (map.size === 0) ? [[""]] : [];
    const itr = map.values();
    for(const value of itr) {
        solution.push(value);
    }
    return solution;
};


/*
    There are several different approaches to this problem we can use, we can create a hash table by:
        1. Sorting Strings
        2. Using character count as hash key (aabbb = ...000032)
        3. Using product of primes

    My approach maps each of the 26 letters in the alphabet to one of the first 26 prime numbers
    We get the prime value for each char in a string and multiply them together to get a hash,
    since the resulting hash is a prime number or a unique product of primes (fundamental theorem of arithmitic),
    two words are anagrams if their products are the same.
*/