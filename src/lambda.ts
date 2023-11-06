(() => {
    const funcAnon = function () {
        console.log("ciao");
    };

    console.log(typeof notAnon); //function
    //console.log(typeof funcLambda); //ERROR!

    const funcLambda = () => {
        console.log("ciao");
    };

    console.log(typeof funcAnon); //function
    console.log(typeof funcLambda); //function
    funcAnon();
    funcLambda();

    function notAnon() {
        console.log("ciao");
    }
})();
