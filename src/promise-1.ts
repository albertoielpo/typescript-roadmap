// promise

(() => {
    function myAsyncFunction(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                //resolve("timeout...");
                reject("Error simulation"); //ko
            }, 1000);
        });
    }

    console.log("1");
    const r = myAsyncFunction();

    /** then and catch management ✅ */

    r.then((res) => {
        /** resolve code */
        console.log(res);
    }).catch((err) => {
        /** reject code */
        console.error(err);
    });
    console.log("2");
})();
