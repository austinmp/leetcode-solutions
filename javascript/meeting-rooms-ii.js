var minMeetingRooms = function(intervals) {
    intervals.sort( (a,b) => a[0] - b[0]);
    const comparator = (a, b) =>  b[1] - a[1];
    const bookedMeetings = new PriorityQueue(comparator, intervals[0]);
    let rooms = 1;
    for(let i = 1; i < intervals.length; i++){
          if(bookedMeetings.peek()[1] <=  intervals[i][0]){
              bookedMeetings.pop();
              bookedMeetings.push(intervals[i]);
          } else {
              bookedMeetings.push(intervals[i]);
              rooms++;
          }
    }
    return rooms;
};

class PriorityQueue {
    constructor(comparator, root) {
        this.queue = [root];
        this.isHigherPriority = comparator;
    }

    parent = (i) => Math.floor( (i-1)/2);

    left = (i) => (i*2+1);

    right = (i) => (i*2+2);

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



