enum ProDecoratorSetting {
    PIPPO = "PIPPO",
    PLUTO = "PLUTO"
}

class MyClazz {
    constructor(field: string) {
        this.field = field;
    }
    private field: string;

    @ProDecorator(ProDecoratorSetting.PIPPO)
    public getField(par1: number, par2: string) {
        return `${this.field}`;
    }

    @ProDecorator(ProDecoratorSetting.PLUTO)
    public getField2(par1: number, par2: string) {
        return `${this.field}`;
    }
}

// decorator with parameters...
function ProDecorator(setting: ProDecoratorSetting) {
    //enum / type
    return (
        target: unknown,
        methodName: string,
        descriptor: PropertyDescriptor
    ) => {
        const method = descriptor.value;
        descriptor.value = function (...args: unknown[]) {
            //start execution
            try {
                console.log("before the invoke...");
                const res = method.apply(this, args);
                console.log("after the invoke...");
                if (setting === ProDecoratorSetting.PIPPO) {
                    return `${res} pippo!`;
                } else {
                    return `${res} pluto!`;
                }
            } catch (error) {
                console.error(error);
                throw error; //🗽
            }
        };
        return descriptor;
    };
}

(async () => {
    const myClazz = new MyClazz("my-field-value");
    console.log(`my field is ${myClazz.getField(1, "a")}`);
    console.log(`my field is ${myClazz.getField2(1, "a")}`);
})();
