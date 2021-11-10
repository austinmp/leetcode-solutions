/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if(!head) return false;
    
    let slow = head, fast = head.next;
    while(fast) {
        if(slow === fast) return true;
        slow = slow.next
        fast = fast.next ? fast.next.next : fast.next;
    }
    
    return false;
};


/* 
    Solution:
        - Use a fast and slow pointer
        - Fast pointer starts at head.next, slow at head
        - If fast pointer reaches null / the end, we return false (no cycle)
        - If fast pointer and slow pointer meet at same node, we return true
        - (Think about how a fast runner on a track will eventually lap the slow runners)

        Proof that the two nodes pointers eventually meet:
            - if slow is 1 ahead of fast:
                    slow = slow.next  (+2 ahead)
                    fast = fast.next.next (fast += 2, so they will be equal)
            - if slow is 2 ahead:
                slow = slow.next (+3 ahead)
                fast = fast.next.next (fast += 2, so fast will be 1 behind and the prev case applies) 
*/