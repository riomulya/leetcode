// 1365. How Many Numbers Are Smaller Than the Current Number

function smallerNumbersThanCurrent(nums: number[]): number[] {
    // Buat salinan array nums dan urutkan
    const sortedNums = [...nums].sort((a, b) => a - b);
    console.log(sortedNums);
    // Buat objek Map untuk memetakan nilai ke indeksnya
    const numToIndex = new Map(sortedNums.map((num, index) => [num, index]));
    console.log(numToIndex)

    // Gunakan map untuk membuat array hasil
    console.log(nums.map((num) => numToIndex.get(num) || 0))
    return nums.map((num) => numToIndex.get(num) || 0);
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))
