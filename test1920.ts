// 1920. Build Array from Permutation

// cara biasa 
function buildArray(nums: number[]): number[] {
    if (nums.length === 0) {
        return [];
    }
    let result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        result.push(nums[nums[i]]);
    }
    return result;
};


// cara menggunakan map

function buildArray(nums: number[]): number[] {
    if (nums.length === 0) {
        return [];
    }

    const defaultValue = 0; // Gantilah dengan nilai default yang sesuai.

    return nums.map(index => (index < nums.length) ? nums[index] : defaultValue);
}
