// 705. Design HashSet


// Cara biasa , tetapi kurang efisien


class MyHashSet {
    private set: boolean[];

    constructor() {
        this.set = new Array(1000000).fill(false); // Pilih ukuran yang sesuai
    }

    add(key: number): void {
        this.set[key] = true;
    }

    remove(key: number): void {
        this.set[key] = false;
    }

    contains(key: number): boolean {
        return this.set[key];
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */


// Cara yang kedua tetapi bisa lebih efisien menggunakan linked list


class MyHashSet {
    private set: Array<LinkedListNode<boolean>>;
    private size: number;

    constructor() {
        this.size = 1000;
        this.set = new Array(this.size).fill(null);
    }

    private hash(key: number): number {
        return key % this.size;
    }

    private getNode(key: number): LinkedListNode<boolean> | null {
        const index = this.hash(key);
        return this.set[index];
    }

    add(key: number): void {
        const index = this.hash(key);
        if (!this.set[index]) {
            this.set[index] = new LinkedListNode<boolean>(key, true);
        } else {
            let current = this.set[index];
            while (current.next) {
                if (current.key === key) return;
                current = current.next;
            }
            if (current.key !== key) {
                current.next = new LinkedListNode<boolean>(key, true);
            }
        }
    }

    remove(key: number): void {
        const index = this.hash(key);
        let current = this.set[index];
        let prev: LinkedListNode<boolean> | null = null;

        while (current) {
            if (current.key === key) {
                if (prev) {
                    prev.next = current.next;
                } else {
                    this.set[index] = current.next;
                }
                return;
            }
            prev = current;
            current = current.next;
        }
    }

    contains(key: number): boolean {
        const index = this.hash(key);
        const node = this.getNode(key);

        let current = node;
        while (current) {
            if (current.key === key) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}

class LinkedListNode<T> {
    key: number;
    value: T;
    next: LinkedListNode<T> | null;

    constructor(key: number, value: T) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

