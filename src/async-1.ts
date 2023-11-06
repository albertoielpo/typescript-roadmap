// fetch,  promise

function myAsyncFunction(ms: number, err: boolean): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            if (err) {
                reject("this is an error");
            }
            resolve(ms);
        }, ms);
    });
}

async function main() {
    console.log("sync 1");
    const res = await myAsyncFunction(1000, false);
    const res2 = await myAsyncFunction(res + 2000, false);
    console.log(res);
    console.log(res2);
    console.log("async sync 2");
}

main();
