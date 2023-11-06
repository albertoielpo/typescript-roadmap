// loop, array methods, spread, destructure,  JSON.stringify/parse

(() => {
    //Equality
    function isEqualsTo(
        a: string | null | undefined,
        b?: string | null | undefined
    ): void {
        if (a === b) {
            console.log("equals");
        } else {
            console.log("not equals");
        }
    }

    function exists(a?: string | number) {
        //if(a == null)
        if (a === null || a === undefined) {
            console.log("it does not exist");
        } else {
            console.log("it exists");
        }
    }

    // isEqualsTo("ciao", "ciao");
    // isEqualsTo("ciao", null);
    // isEqualsTo("ciao");
    // isEqualsTo(null);

    exists("ciao");
    exists();
    exists(1);
    exists(-1);
    exists(0);

    const aaa = " ";
    const ex = !aaa;
    console.log(ex); //true if null, undefined or empty

    /**** */
    const myObj = { pippo: "10" };
    const myObj2 = { pippo: "10" };

    console.log(myObj === myObj2); //false
    console.log(myObj == myObj2); //false
})();
