// 234. Palindrome Linked List


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

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) {
        return true; // Empty list or single node is a palindrome
    }

    // Find the midpoint using two pointers
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the linked list in-place
    let prev: ListNode | null = null;
    let current: ListNode | null = slow;

    while (current !== null) {
        let nextNode: ListNode | null = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    // Compare the reversed second half with the first half
    while (prev !== null) {
        if (head.val !== prev.val) {
            return false;
        }
        head = head.next;
        prev = prev.next;
    }

    return true;
}
