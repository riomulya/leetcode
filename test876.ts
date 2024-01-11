// 876. Middle of the Linked List


/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null;
    }
    function getCount(ll: ListNode | null): number {
        if (!ll) {
            return 0;
        }
        var count = 0;
        while (ll != null) {
            count++;
            ll = ll.next;
        }
        return count;
    }
    function getMid(length: number, ll: ListNode | null): ListNode | null {
        for (let i = 0; i < length; i++) {
            ll = ll.next;
        }
        return ll;
    }
    if (getCount(head) % 2 === 0) {
        return getMid(getCount(head), head);
    }
    return getMid(getCount(head) + 1, head);
};


// cara fast n slow


function middleNode(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null;
    }
    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next?.next;
        slow = slow.next;
    }
    return slow;
};