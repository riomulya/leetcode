function findErrorNums(nums: number[]): number[] {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;

        if (nums[index] > 0) {
            nums[index] = -nums[index];
        } else {
            // Jika elemen tersebut sudah negatif, itu berarti kita sudah menemukannya sebelumnya
            result.push(index + 1); // Tambahkan 1 ke indeks yang ditemukan
        }
    }

    // Temukan angka yang hilang
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1); // Tambahkan 1 ke indeks yang hilang
            break; // Kita hanya perlu menemukan satu angka yang hilang
        }
    }
    console.log(result)

    return result;
}

console.log(findErrorNums([1, 2, 2, 4]))

console.log(findErrorNums([1, 2, 3, 4, 4, 5]))


