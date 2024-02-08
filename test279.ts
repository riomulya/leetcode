// function numSquares(n: number): number {
//     // let count: number = 0;
//     // let countArr: number[] = [16, 9, 4, 1];
//     // let index: number = 0;
//     // let nums: number = n;

//     // while (nums > 0 && index < countArr.length) {
//     //     if (n % countArr[index] === 0 && countArr[index] !== 1) {
//     //         count = n / countArr[index];
//     //         break;
//     //     }
//     //     if (nums === countArr[index]) {
//     //         nums -= countArr[index];
//     //         count++;
//     //         break; // Jika nums sama dengan countArr[index], maka kita hanya perlu menambahkan count dan menghentikan loop
//     //     }

//     //     if (nums > countArr[index]) {
//     //         nums -= countArr[index];
//     //         count++;
//     //     }
//     //     if (nums < countArr[index]) {
//     //         index++; // Tambahkan index jika nums < countArr[index]
//     //     }
//     //     console.log(index)
//     //     console.log(nums)
//     //     console.log(count)
//     // }

//     // return count;

//     // Bilangan negatif, 0, dan 1 bukan bilangan prima
//     if (n <= 3) {
//         return n;
//     }
//     if (n === 4 || n === 9 || n === 16) {
//         return 1;
//     }

//     // Iterasi dari 2 hingga akar kuadrat dari bilangan
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         // Jika bilangan dapat dibagi habis oleh bilangan lain, maka bukan bilangan prima
//         if (n % i === 0) {
//             return 3;
//         }
//     }

//     return 2;
// }



//solution with sdynamic programming


function numSquares(n: number): number {
    // Create an array to store the least number of perfect square numbers required
    const dp: number[] = new Array(n + 1).fill(Infinity);
    dp[0] = 0; // Base case

    // Iterate from 1 to n
    for (let i = 1; i <= n; i++) {
        // Check all perfect squares less than or equal to the current number
        for (let j = 1; j * j <= i; j++) {
            // Update the least number of perfect square numbers required
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }

    return dp[n];
}

// Test cases
console.log(numSquares(12)); // Output: 3
console.log(numSquares(13)); // Output: 2


console.log(numSquares(12)); // Output: 3
console.log(numSquares(13)); // Output: 2
console.log(numSquares(7)); // Output: 4
console.log(numSquares(19)); // Output: 3
