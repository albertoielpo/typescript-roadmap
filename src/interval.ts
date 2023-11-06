// interval, fetch, fs, promise
(() => {
    // exec one interval 10 times
    const timer = setInterval(() => {
        console.log("interval !");
    }, 1000);

    setTimeout(() => {
        clearInterval(timer);
    }, 10000);
})();
