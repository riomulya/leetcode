// 1678. Goal Parser Interpretation


function interpret(command: string): string {
    let prefix = "(";
    let suffix = ")";
    let temp = command.split("");
    let prev = temp[0] === prefix ? prefix : temp[0];
    let result = temp[0] === prefix ? [] : [temp[0]];
    for (let i = 1; i < temp.length; i++) {
        if (prev === prefix && temp[i] == suffix) {
            result.push("o");
        }
        if (temp[i] !== prefix && temp[i] !== suffix) {
            result.push(temp[i]);
        }
        prev = temp[i];
    }
    return result.join("");
};