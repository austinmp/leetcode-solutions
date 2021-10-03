class Trie {   
    constructor() {
        this.root = new this.Node(false);   
    }

    Node = class {
        constructor(isTerminal) {
            this.pointers = new Array(26);
            this.isTerminal = isTerminal || false;
        }
    }

    insert = (word) => {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            // map to value between 0-25 (a-z)
            let index = word.charCodeAt(i) - 'a';
            if(!curr.pointers[index]) {
                curr.pointers[index] = new this.Node();
            }
            curr = curr.pointers[index];
        }
        curr.isTerminal = true;
    }

    search = (word) => {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 'a';
            if(!curr.pointers[index]) {
                return false;
            }
             curr = curr.pointers[index];
        }
        return curr.isTerminal;
    }

    startsWith = (word) => {
        let curr = this.root;
        for(let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 'a';
            if(!curr.pointers[index]) {
                return false;
            }
             curr = curr.pointers[index];
        }
        return true;
    }
}