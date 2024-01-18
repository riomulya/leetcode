type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    return async function (...args) {
        return new Promise((res, rej) => {
            const timeoutID = setTimeout(() => rej("Time Limit Exceeded"), t);

            fn(...args).then(res).catch(rej).finally(() => { clearTimeout(timeoutID) });
        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */


// Test case 1: Reject with "Time Limit Exceeded"
const limited1 = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited1(150).catch(error => console.log(error));

const limited2 = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited2(50).then(() => console.log('Function completed successfully')); 