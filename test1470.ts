// 1470. Shuffle the Array


function shuffle(nums: number[], n: number): number[] {
    const result: number[] = [];

    for (let i = 0; i < n; i++) {
        result.push(nums[i], nums[i + n]);
    }

    return result;
};