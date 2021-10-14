/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const solution = [];
    const map = new Map();
    const heap = new PriorityQueue( (a, b) => {
        return b[1]-a[1]; 
    });
    
    nums.forEach( num => {
        const val = map.has(num) ? map.get(num) + 1 : 1;
        map.set(num, val);
    });

    for(const [key, value] of map) {
        if(heap.size() < k) {
            heap.push([key, value]);
            continue;
        }

        const minElement = heap.peek();
        if(value > minElement[1]) {
            heap.pop();
            heap.push([key, value]);
        }
    }

    for(let i = 0; i < k; i++) {
        const [num, count] = heap.pop();
        if(num !== null ) solution.push(num);
    }
    
    return solution;
};

class PriorityQueue {
    constructor(comparator, root) {
        this.queue = [];
        this.isHigherPriority = comparator;
    }

    parent = (i) => Math.floor( (i-1)/2);

    left = (i) => (i*2+1);

    right = (i) => (i*2+2);

    size = () => {
        return this.queue.length;
    }

    push = (node) => {
        this.queue.push(node);
        this.siftUp();
    }

    pop = () => {
        const root = this.queue.shift(); 
        this.siftDown();
        return root;
    }

    peek = () => { 
        return this.queue[0];
    }

   /*  Procedure for maintaing heap when push() is called : 
        1. Insert the new element as the last node.
        2. While the new node has higher priority than its parent
                Swap new node with parent
    */
    siftUp = () => {
        let newNodeIndex = this.queue.length-1;
        let parentIndex = this.parent(newNodeIndex);
        while(parentIndex >= 0 && this.isHigherPriority(this.queue[newNodeIndex],  this.queue[parentIndex]) > 0) {
            this.swap(parentIndex, newNodeIndex);
            newNodeIndex = parentIndex;
            parentIndex = this.parent(newNodeIndex);
        }
    }

    /*  Procedure for maintaing heap when pop() is called : 
        1. Remove root element and save it so it can be returned later.
        2. Remove last element and make it the new root.
        3. While new root has lower priority than one of its children
                Swap new root with highest priority child
    */
    siftDown = () => {
        const newRoot = this.queue.pop();        
        if(newRoot) {
            this.queue.unshift(newRoot);       
            let rootIndex = 0;
            let childIndex = this.getIndexOfHighestPriorityChild(this.left(rootIndex), this.right(rootIndex));
            while(childIndex && this.isHigherPriority(this.queue[childIndex], this.queue[rootIndex]) > 0) {
                this.swap(rootIndex, childIndex);
                rootIndex = childIndex;
                childIndex = this.getIndexOfHighestPriorityChild(this.left(rootIndex), this.right(rootIndex));
            }
        }
    }

    swap = (a, b) => {
        const temp = this.queue[a];
        this.queue[a] = this.queue[b];
        this.queue[b] = temp;
    }

    getIndexOfHighestPriorityChild = (leftIndex, rightIndex) => {
        const leftNode = this.queue[leftIndex];
        const rightNode = this.queue[rightIndex];
        if(!leftNode) {
            return null;
        }
        if(rightNode && this.isHigherPriority(rightNode, leftNode) > 0){ 
            return rightIndex;
        } 
        return leftIndex;
    }

}

/*
Algorithm

The first step is to build a hash map element -> its frequency. In Java, we use the data structure HashMap. 
Python provides dictionary subclass Counter to initialize the hash map we need directly from the input array.
This step takes \mathcal{O}(N)O(N) time where N is a number of elements in the list.

The second step is to build a heap of size k using N elements. To add the first k elements takes a linear time 
\mathcal{O}(k)O(k) in the average case, and \mathcal{O}(\log 1 + \log 2 + ... + \log k) = \mathcal{O}(log k!) = \mathcal{O}(k \log k)O(log1+log2+...+logk)=O(logk!)=O(klogk) 
in the worst case. It's equivalent to heapify implementation in Python. After the first k elements we start to push and pop at each step, N - k steps in total. 
The time complexity of heap push/pop is \mathcal{O}(\log k)O(logk) and we do it N - k times that means \mathcal{O}((N - k)\log k)O((N−k)logk) time complexity. 
Adding both parts up, we get \mathcal{O}(N \log k)O(Nlogk) time complexity for the second step.

The third and the last step is to convert the heap into an output array. That could be done in \mathcal{O}(k \log k)O(klogk) time.


*/