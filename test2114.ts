// 2114. Maximum Number of Words Found in Sentences


function mostWordsFound(sentences: string[]): number {
    let count = 0;

    for (let i = 0; i < sentences.length; i++) {
        count = sentences[i].split(" ").length > count ? sentences[i].split(" ").length : count;
    }

    return count;
};