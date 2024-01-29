class MyQueue {
    data: number[];
    constructor() {
        this.data = [];
    }

    push(x: number): void {
        this.data.push(x);
    }

    pop(): number {
        return this.data.pop() ? 1 : 0;
    }

    peek(): number {
        return this.data[0]
    }

    empty(): boolean {
        return this.data !== null ? false : true;
    }
}


// Inisialisasi objek MyQueue
const obj = new MyQueue();

