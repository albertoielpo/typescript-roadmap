(() => {
    function pippo(par: { a: number; b: number }) {
        return par;
    }

    const keyValue = {
        key: "VALUE"
    };

    const aStr = JSON.stringify(keyValue);
    console.log(aStr); //str
    const aObj = JSON.parse(aStr);
    console.log(aObj); //obj

    const myArr = [1, 2, 3, 4, 5];
    const myArr2 = [...myArr, 6, 7, 8]; //spread [1, 2, 3, 4, 5, 6, 7, 8 ]
    console.log(myArr2);

    const myObj = { a: 1 };
    const myObj2 = {
        ...myObj,
        b: 2
    };
    console.log(myObj2); //spread: { a: 1, b: 2 }

    const { a, b } = pippo(myObj2); //destructure
    console.log(a);
    console.log(b);
})();
