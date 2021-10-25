class Trie  {
    constructor() {
        this.root = new this.TrieNode();
    }
    
    TrieNode = class {
        constructor(isTerminal) {
            this.isTerminal = isTerminal || false;
            this.edges = new Array(26);
        }
    }

    insert = (word) => {
        if(this.search(word)) return;

        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 'a'.charCodeAt(0);
            if(!curr.edges[index]){
                curr.edges[index] =  new this.TrieNode();
            }
            curr = curr.edges[index];
            // handles case where the word we are adding is prefix of another word (e.g. we have 'apple' and we add 'app')
            if(i === word.length-1) curr.isTerminal = true; 
        }
    }

    searchPrefix = (word) => {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 'a'.charCodeAt(0);
            if(!curr.edges[index]) return null;
            curr = curr.edges[index];
        }
        return curr;
    }
    
    search = (word) => {
        const lastChar = this.searchPrefix(word);
        return (lastChar !== null && lastChar.isTerminal);
    }

    startsWith = (prefix) => {
        return (this.searchPrefix(prefix) !== null)
    }
}