function groupAnagrams(strs: string[]): string[][] {
    const anagramGroups: { [key: string]: string[] } = {};

    for (const word of strs) {
        // Mengurutkan karakter-karakter dan mengonversi menjadi string untuk digunakan sebagai kunci
        const key = word.split('').sort().join('');

        // Menambahkan kata ke dalam kelompok anagram yang sesuai
        if (anagramGroups[key]) {
            anagramGroups[key].push(word);
        } else {
            anagramGroups[key] = [word];
        }
    }

    // Mengonversi nilai-nilai objek ke dalam bentuk array
    const result: string[][] = Object.values(anagramGroups);

    return result;
}
