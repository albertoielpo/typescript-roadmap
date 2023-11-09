class MyClass {
    constructor() {}
}

class MyClass2 extends MyClass {}

(async () => {
    const a = {};
    const b: unknown[] = [];
    const c = new MyClass();
    const d = new MyClass2();
    const e = function () {};
    const f = () => {};
    const g = new Map();
    const h = new Set();

    console.log(typeof a); //object
    console.log(a instanceof Object); //true
    console.log(typeof b);
    console.log(b instanceof Array); //true
    console.log(typeof c);

    console.log(c instanceof MyClass); //true
    console.log(c instanceof Object); //true
    console.log(c instanceof MyClass2); //false
    console.log(typeof c);

    console.log(d instanceof MyClass); //true
    console.log(d instanceof Object); //true
    console.log(d instanceof MyClass2); //true
    console.log(typeof d);

    console.log(typeof e); //function
    console.log(e instanceof Function); //true

    console.log(typeof f); //function
    console.log(f instanceof Function); //true

    console.log(typeof g); //object
    console.log(g instanceof Map); //true

    console.log(typeof h); //object
    console.log(h instanceof Set); //true

    const i = new WeakMap();
    const j = { k: 1 };
    i.set(j, "pippo"); //

    const k = new Promise<void>((resolve, reject) => {});
    console.log(typeof k); //object
    console.log(k instanceof Promise); //true

    const l = new Set<string>();
    l.add("myvalue");

    const m = [...l]; //convert set to array
    console.log(m); //[ 'myvalue' ]

    const n = Symbol("nome"); //primitive but with ref
    console.log(n);
})();
