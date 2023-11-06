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
    // if one fails... then all fails
    // Promise.all([myAsyncFunction(2000, false), myAsyncFunction(1000, true)])
    //     .then((res) => {
    //         /** good */
    //         console.log(res);
    //     })
    //     .catch((err) => {
    //         /** ko */
    //         console.error(err);
    //     });

    // it's a race here! 🚀
    // Promise.race([myAsyncFunction(2000, false), myAsyncFunction(1000, false)])
    //     .then((res) => {
    //         /** good */
    //         console.log(res);
    //     })
    //     .catch((err) => {
    //         /** ko */
    //         console.error(err);
    //     });

    //✅ good!
    Promise.allSettled([
        myAsyncFunction(2000, false),
        myAsyncFunction(1000, true)
    ])
        .then((res) => {
            for (let cur of res) {
                if (cur.status === "fulfilled") {
                    /** resolve code ... */
                    console.log("gooooood!");
                } else {
                    /** reject code ... */
                    console.error("baaaaaaad");
                }
                console.log(cur);
            }
        })
        .catch((err) => {
            /** unexpected exception */
            console.error(err);
        });

    console.log("sync 2");
})();
