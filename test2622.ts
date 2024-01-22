class TimeLimitedCache {
    private data: Map<number, { value: number, expiration: number }> = new Map();

    set(key: number, value: number, duration: number): boolean {
        if (this.data.has(key) && this.data.get()?.expiration > Date.now()) {
            this.data.set(key, { value, expiration: Date.now() + duration })
            return true;
        } else {
            this.data.set(key, { value, expiration: Date.now() + duration })
            return false;
        }
    }

    get(key: number): number {
        if (this.data.has(key) && this.data.get()?.expiration > Date.now()) {
            return this.data.get(key)?.value;
        } else {
            return -1;
        }
    }

    count(): number {
        let count = 0;
        for (const key of this.data.keys()) {
            if (this.data.get(key).expiration > Date.now()) {
                count++;
            }
        }
        return count;
    }
}
/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */


// Test case 1: Set a value with duration and check count
const timeLimitedCache1 = new TimeLimitedCache();
console.log(timeLimitedCache1.set(1, 42, 1000));  // Should print false (not enough time has passed)
console.log(timeLimitedCache1.count());  // Should print 1

// Test case 2: Get the value for a key
console.log(timeLimitedCache1.get(1));  // Should print 42

// Test case 3: Wait for the duration to pass and try setting again
setTimeout(() => {
    console.log(timeLimitedCache1.set(1, 42, 1000));  // Should print true (enough time has passed)
}, 1100);

// Test case 4: Count should still be 1 until the duration passes
console.log(timeLimitedCache1.count());  // Should print 1

// Test case 5: Wait for the duration to pass and check count again
setTimeout(() => {
    console.log(timeLimitedCache1.count());  // Should print 0 (the duration has passed)
}, 1200);
