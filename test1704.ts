// 1704. Determine if String Halves Are Alike


function halvesAreAlike(s: string): boolean {
    if (s === null) {
        return false;
    }
    function isVowel(char: string): boolean {
        const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        return vowels.includes(char);
    }
    let temp = s.toLowerCase().split("");
    let countA: number = 0;
    let countB: number = 0;
    let mid: number = temp.length % 2 === 0 ? temp.length / 2 : (temp.length + 1) / 2;
    for (let i = 0; i < mid; i++) {
        if (isVowel(temp[i])) {
            countA++;
        }
        if (isVowel(temp[mid + i])) {
            countB++;
        }
    }
    return countA !== countB ? false : true;
};

console.log(halvesAreAlike("book"));