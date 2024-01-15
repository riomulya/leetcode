// 1672. Richest Customer Wealth

function maximumWealth(accounts: number[][]): number {
    let max = 0;

    for (let i = 0; i < accounts.length; i++) {
        let arr = [...accounts[i]];
        let tempMax = 0;
        for (let j = 0; j < arr.length; j++) {
            tempMax += arr[j];
        }
        if (max < tempMax) {
            max = tempMax;
        }
    }
    return max;
};