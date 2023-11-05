type MyCustomType = {
    pippo: string;
    pluto: number;
};

//type Ads extends MyCustomType {}

interface MyCustomInterface {
    pippo: string;
    pluto: number;
}

class MyCustomClass implements MyCustomInterface {
    constructor() {
        this.pippo = "";
        this.pluto = 0;
    }
    pippo: string;
    pluto: number;
}

console.log("hello world");
const myCustomType: MyCustomType = {
    pippo: "ciao",
    pluto: 2
};
const myCustomInterface: MyCustomInterface = {
    pippo: "ciao",
    pluto: 2
};

const myCustomClass = new MyCustomClass();

console.log(myCustomType);
console.log(myCustomInterface);
console.log(myCustomClass);

//console.log(myCustomType instanceof MyCustomType);
//console.log(myCustomInterface instanceof MyCustomInterface);
console.log(myCustomClass instanceof MyCustomClass); //true
