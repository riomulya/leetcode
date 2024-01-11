// 160. Intersection of Two Linked Lists

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
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// SOLUSI PERTAMA

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (headA === null || headB === null) {
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

    let lenA: number = getCount(headA);
    let lenB: number = getCount(headB);

    // Selisihkan panjang yang lebih panjang
    let currentA: ListNode | null = headA;
    let currentB: ListNode | null = headB;

    for (let i = 0; i < Math.abs(lenA - lenB); i++) {
        if (lenA > lenB) {
            currentA = currentA?.next;
        } else {
            currentB = currentB?.next;
        }
    }

    // Aligment
    while (currentA !== null && currentB !== null) {
        if (currentA === currentB) {
            return currentA;  // Node persimpangan ditemukan
        }
        currentA = currentA.next;
        currentB = currentB.next;
    }

    return null;  // Tidak ada persimpangan
}

// SOLUSI KEDUA


function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (headA === null || headB === null) {
        return null;
    }

    let pointerA: ListNode | null = headA;
    let pointerB: ListNode | null = headB;

    while (pointerA !== pointerB) {
        pointerA = pointerA === null ? headB : pointerA.next;
        pointerB = pointerB === null ? headA : pointerB.next;
    }

    return pointerA;
}



