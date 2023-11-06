// Timeout, interval, fetch, fs, promise
(() => {
    function execTimout() {
        console.log("timeout1...");
    }
    const exTi = () => {
        console.log("timeout2...");
    };

    console.log("sync code 1"); //
    setTimeout(execTimout, 1000);
    setTimeout(function () {
        console.log("timeout3...");
    }, 1000);
    setTimeout(exTi, 1000);

    const nodeTimeout = setTimeout(() => {
        console.log("timeout 0");
    }, 10_000); //ms
    console.log(nodeTimeout);
    clearTimeout(nodeTimeout);

    console.log("sync code 2");
})();

/// 1 codice sync
/// fasi loop....
/// 2 timer
/// ....
