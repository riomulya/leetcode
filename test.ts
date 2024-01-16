type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (expectedVal: any) => {
      if (val !== expectedVal) {
        throw new Error("Not Equal");
      } else {
        return true;
      }
    },
    notToBe: (expectedVal: any) => {
      if (val === expectedVal) {
        throw new Error("Equal");
      } else {
        return true;
      }
    }
  }
};

/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal"
*/

console.log(expect(5).toBe(5))
console.log(expect(5).notToBe(5))


type Mapper = (n: number, i: number) => number;

function map(arr: number[], fn: Mapper): number[] {
  let result: number[] = [];
  for (let j = 0; j < arr.length; j++) {
    result.push(fn(arr[j], j));
  }
  return result;
}

function plus(n: number, i: number): number {
  return n + i;
}

console.log(map([1, 2, 3, 4, 5], plus));
