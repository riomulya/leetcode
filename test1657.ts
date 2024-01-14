// 1657. Determine if Two Strings Are Close

// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

 

// Example 1:

// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
// Example 2:

// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
// Example 3:

// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"
 

// Constraints:

// 1 <= word1.length, word2.length <= 105
// word1 and word2 contain only lowercase English letters.



function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) {
        return false; // Jika panjang kata berbeda, tidak mungkin menjadi pasangan yang saling tertutup
    }

    const charCount1 = getCharCount(word1);
    const charCount2 = getCharCount(word2);

    // Memeriksa apakah karakter yang ada di kedua kata sama
    const chars1 = Object.keys(charCount1).sort().toString();
    const chars2 = Object.keys(charCount2).sort().toString();
    if (chars1 !== chars2) {
        return false;
    }

    // Memeriksa apakah frekuensi kemunculan karakter sama di kedua kata
    const counts1 = Object.values(charCount1).sort().toString();
    const counts2 = Object.values(charCount2).sort().toString();
    return counts1 === counts2;
}

function getCharCount(word: string): Record<string, number> {
    const charCount: Record<string, number> = {};
    for (const char of word) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}
