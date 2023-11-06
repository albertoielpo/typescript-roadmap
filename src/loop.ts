//loop, array methods, spread, destructure,  JSON.stringify/parse

(() => {
    type MyType = {
        key1: string;
        key2: string;
    };

    //for, while
    const myArr = [1, 2, 3, 4, 5];
    // for (let ii = 0; ii < myArr.length; ii++) {
    //     const element = myArr[ii];
    //     console.log(element);
    // }

    //value
    for (let cur of myArr) {
        console.log(cur);
    }

    myArr.forEach((cur) => {
        console.log(cur);
    });

    //check if is possible to use MyType
    const myObj: Record<string, string> = {
        key1: "pluto",
        key2: "pippo"
    };

    //key
    for (let cur in myObj) {
        //print the value...
        console.log(myObj[cur]);
    }

    let keys = Object.keys(myObj);
    console.log(keys); //[ 'key1', 'key2' ]

    let values = Object.values(myObj);
    console.log(values); //[ 'pluto', 'pippo' ]

    let entries = Object.entries(myObj);
    console.log(entries); //[ [ 'key1', 'pluto' ], [ 'key2', 'pippo' ] ]

    for (let cur of myArr) {
        if (cur === 3) {
            break;
            //continue;
        }
        console.log(cur);
    }
})();
