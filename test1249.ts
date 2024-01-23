function maxLength(arr: string[]): number {
    if (arr.length === 1) {
        return arr[0].length;
    }
    let numArr = [];
    for (let i = 0; i < arr.length; i++) {
        numArr.push(arr[i].length);
    }

    numArr.sort((a, b) => b - a);

    return numArr[1] + numArr[0];
};

console.log(maxLength(["un", "iq", "ue"]))