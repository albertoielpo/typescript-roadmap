// fetch,  promise

(() => {
    function myAsyncFunction(ms: number, err: boolean): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                if (err) {
                    reject("this is an error");
                }
                resolve(`timeout...${ms}`);
            }, ms);
        });
    }

    /** promise all ... wait the last one... */
    console.log("sync 1");
    // Promise.all([myAsyncFunction(2000, false), myAsyncFunction(1000, true)])
    //     .then((res) => {
    //         /** good */
    //         console.log(res);
    //     })
    //     .catch((err) => {
    //         /** ko */
    //         console.error(err);
    //     });

    // Promise.race([myAsyncFunction(2000, false), myAsyncFunction(1000, false)])
    //     .then((res) => {
    //         /** good */
    //         console.log(res);
    //     })
    //     .catch((err) => {
    //         /** ko */
    //         console.error(err);
    //     });

    Promise.allSettled([
        myAsyncFunction(2000, false),
        myAsyncFunction(1000, true)
    ])
        .then((res) => {
            /** good */
            for (let cur of res) {
                if (cur.status === "fulfilled") {
                    console.log("gooooood!");
                } else {
                    console.error("baaaaaaad");
                }
                console.log(cur);
            }
        })
        .catch((err) => {
            /** ko */
            console.error(err);
        });

    console.log("sync 2");
})();
