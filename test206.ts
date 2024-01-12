// 206. Reverse Linked List

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

function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null;
    }
    let prev: ListNode | null = null;
    let current: ListNode | null = head;

    while (current !== null) {
        let nextNode: ListNode | null = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev;
};


// cara penggunaan rekursif

function reverseList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return head;
    }

    let reversedHead: ListNode | null = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return reversedHead;
}

