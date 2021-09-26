/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head || !head.next) return null;
    
    let prev = head, curr = head, runner = head;
    
    // advance runner by n
    for(let i = 1; i < n; i++){
        if(!runner.next) break
        runner = runner.next;
    }
    
    // advance curr to node to be removed
    while(runner.next){
        prev = curr;
        curr = curr.next;
        runner = runner.next;
    }
    
    // remove head edge case
    if(prev === curr) return head.next;
    
    // perform removal
    prev.next = curr.next;
    curr.next = null;
    
    return head;
};