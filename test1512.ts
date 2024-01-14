// 1512. Number of Good Pairs


function numIdenticalPairs(nums: number[]): number {
    let count: number = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
    }
    return count;
};