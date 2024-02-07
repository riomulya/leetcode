function groupAnagrams(strs: string[]): string[][] {
    const anagramGroups: { [key: string]: string[] } = {};

    for (const word of strs) {
        // Mengurutkan karakter-karakter dan mengonversi menjadi string untuk digunakan sebagai kunci
        const key = word.split('').sort().join('');
        console.log(key)
        console.log(word)
        // Menambahkan kata ke dalam kelompok anagram yang sesuai
        if (anagramGroups[key]) {
            console.log(anagramGroups)
            console.log(anagramGroups[key])
            anagramGroups[key].push(word);
        } else {
            anagramGroups[key] = [word];
            console.log(anagramGroups[key])
            console.log(anagramGroups[key])
        }
    }
    console.log(anagramGroups)

    // Mengonversi nilai-nilai objek ke dalam bentuk array
    const result: string[][] = Object.values(anagramGroups);
    console.log(result)
    return result;
}


// Contoh penggunaan
const strs1: string[] = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs1));

const strs2: string[] = [""];
console.log(groupAnagrams(strs2));

const strs3: string[] = ["a"];
console.log(groupAnagrams(strs3));