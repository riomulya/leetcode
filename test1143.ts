// 1143. Longest Common Subsequence



// function longestCommonSubsequence(text1: string, text2: string): number {
//     if (text1.length === 0 || text2.length === 0) {
//         return 0;
//     }
//     let result = 0;
//     let txt1 = text1.split('');
//     let txt2 = text2.split('');

//     console.log(txt1)
//     console.log(txt2)
//     for (let i = 0; i < txt1.length; i++) {
//         console.log(txt2.includes(txt1[i]))
//         if (txt2.includes(txt1[i])) {
//             result++;
//         }
//     }
//     return result;
// };


// cara yang benars


function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length;
    const n = text2.length;

    // Initialize a 2D array to store the lengths of LCS for subproblems
    const dp: number[][] = [];
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }

    // Build the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // The length of the LCS is stored in the bottom-right cell of dp array
    return dp[m][n];
}


console.log(longestCommonSubsequence("ezupkr", "ubmrapg"))
console.log(longestCommonSubsequence("abcde", "ace"))