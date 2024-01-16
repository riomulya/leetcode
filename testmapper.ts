type Mapper = (n: number, i: number) => number;

function map(arr: number[], fn: Mapper): number[] {
    let result: number[] = [];
    for (let j = 0; j < arr.length; j++) {
        result.push(fn(arr[j], j));
    }
    return result;
}

function plus(n: number, i: number): number {
    i = 2;
    return n + i;
}

console.log(map([1, 2, 3, 4, 5], plus));