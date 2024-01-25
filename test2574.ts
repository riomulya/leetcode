function leftRightDifference(nums: number[]): number[] {
    const n = nums.length;
    const leftSum: number[] = new Array(n).fill(0);
    const rightSum: number[] = new Array(n).fill(0);

    // Hitung leftSum
    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum += nums[i - 1];
        leftSum[i] = sum;
    }

    // Hitung rightSum
    sum = 0;
    for (let i = n - 2; i >= 0; i--) {
        sum += nums[i + 1];
        rightSum[i] = sum;
    }

    // Hitung selisih dan hasilkan array jawaban
    const answer: number[] = new Array(n);
    for (let i = 0; i < n; i++) {
        answer[i] = Math.abs(leftSum[i] - rightSum[i]);
    }

    return answer;
}

// Contoh penggunaan:
const nums1 = [10, 4, 8, 3];
console.log(leftRightDifference(nums1)); // Output: [15, 1, 11, 22]

const nums2 = [1];
console.log(leftRightDifference(nums2)); // Output: [0]
