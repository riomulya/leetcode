// 2974. Minimum Number Game

function numberGame(nums: number[]): number[] {
    nums.sort((a, b) => a - b);
    const arr = [];
    for (let i = 0; i < nums.length; i += 2) {
        arr.push(nums[i + 1]);
        arr.push(nums[i]);
    }

    return arr;
};

console.log(numberGame([2, 1, 3, 4,5,6]))