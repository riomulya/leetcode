async function sleep(millis: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, millis))
}



let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100

console.log(sleep(100))


async function example() {
    let t = Date.now();
    await sleep(100);
    console.log(Date.now() - t);
}

example();