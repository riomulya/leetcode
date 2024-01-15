// 1365. How Many Numbers Are Smaller Than the Current Number

function smallerNumbersThanCurrent(nums: number[]): number[] {
    const sortedNums = [...nums].sort((a, b) => a - b);
    const numToCount = new Map<number, number>();

    for (let i = 0; i < sortedNums.length; i++) {
        if (!numToCount.has(sortedNums[i])) {
            numToCount.set(sortedNums[i], i);
        }
    }
    console.log(numToCount);
    console.log(sortedNums)
    console.log(nums.map((num) => numToCount.get(num) || 0))
    return nums.map((num) => numToCount.get(num) || 0);
}


console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))
