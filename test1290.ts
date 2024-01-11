// 1290. Convert Binary Number in a Linked List to Integer

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


class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function getDecimalValue(head: ListNode | null): number {
    if (head === null) {
        return 0;
    }
    let biner: number[] = [];
    while (head !== null) {
        biner.push(head.val);
        head = head.next;
    }
    return parseInt(biner.join(""), 2);
};


// cara dengan operator bitwise

function getDecimalValue(head: ListNode | null): number {
    if (head === null) {
        return 0;
    }

    let decimalValue = 0;

    while (head !== null) {
        // Geser nilai sebelumnya ke kiri dan tambahkan nilai baru
        decimalValue = (decimalValue << 1) | head.val;
        head = head.next;
    }

    return decimalValue;
}
 