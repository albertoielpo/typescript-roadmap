// fetch,  promise

(() => {
    function myAsyncFunction(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                //resolve("timeout...");
                reject("errorr!!!"); //ko
            }, 1000);
        });
    }

    console.log("1");
    const r = myAsyncFunction();
    r.then((res) => {
        /** good */
        console.log(res);
    }).catch((err) => {
        /** ko */
        console.error(err);
    });
    console.log("2");
})();
