// 706. Design HashMap


class MyHashMap {
    private buckets: Array<[number, number][]>; // Array of key-value pairs

    constructor() {
        this.buckets = new Array(1000).fill([]); // Using an array with 1000 slots
    }

    private hash(key: number): number {
        return key % this.buckets.length;
    }

    put(key: number, value: number): void {
        const hash = this.hash(key);
        const bucket = this.buckets[hash];

        for (const pair of bucket) {
            if (pair[0] === key) {
                // Update value if key already exists
                pair[1] = value;
                return;
            }
        }

        // Add new key-value pair
        bucket.push([key, value]);
    }

    get(key: number): number {
        const hash = this.hash(key);
        const bucket = this.buckets[hash];

        for (const pair of bucket) {
            if (pair[0] === key) {
                return pair[1]; // Return value if key is found
            }
        }

        return -1; // Return -1 if key is not found
    }

    remove(key: number): void {
        const hash = this.hash(key);
        const bucket = this.buckets[hash];

        this.buckets[hash] = bucket.filter((pair) => pair[0] !== key);
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */