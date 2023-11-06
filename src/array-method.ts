// spread, destructure,  JSON.stringify/parse

(() => {
    const myArr = [1, 2, 3, 4, 5];
    myArr.some((cur) => {
        console.log(cur);
        return cur === 3; //if true then break
    });

    let x = myArr.some((cur) => cur === 6);
    console.log(x);

    let myFilter = myArr.filter((cur) => cur < 3);
    console.log(myFilter);

    let myFilter2 = myArr.filter((cur) => cur > 6); //[]
    console.log(myFilter2);

    const myArrObj = [{ a: 1 }, { a: 2 }, { a: 3 }];

    let y = myArrObj.find((cur) => cur.a === 3);
    console.log(y); //{ a: 3 }

    let yIdx = myArrObj.findIndex((cur) => cur.a === 3);
    console.log(yIdx); //2

    ////
    myArr.push(6);
    console.log(myArr);

    const popped = myArr.pop();
    console.log(popped);
    console.log(myArr);

    //
    const xxx = myArr.splice(0, 1);
    console.log(xxx); //[1]
    console.log(myArr); //[ 2, 3, 4, 5 ]

    //
    const yyy = myArr.slice(0, 1);
    console.log(yyy); //[2]
    console.log(myArr); //[ 2, 3, 4, 5 ]

    const idx3 = myArr.indexOf(10);
    console.log(idx3); //1
    if (idx3 !== -1) {
        myArr.splice(idx3, 1);
    } else {
        console.error("not found pirla!");
    }
    console.log(myArr); //[2,4,5]

    const myArrNew = myArrObj.map((x) => {
        return {
            b: x.a
        };
    });
    console.log(myArrNew); //[ { b: 1 }, { b: 2 }, { b: 3 } ]

    //myArrObj.reduce
})();
