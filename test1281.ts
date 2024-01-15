// 1281. Subtract the Product and Sum of Digits of an Integer


function subtractProductAndSum(n: number): number {
    let sum = 0;
    let multiple = 1;
    let temp = n.toString().split("");

    console.log(temp)

    for (let i = 0; i < temp.length; i++) {
        sum += +temp[i];
        multiple *= +temp[i];
        console.log(sum)
        console.log(multiple)
    }

    return multiple - sum;
};
    
console.log(subtractProductAndSum(234))