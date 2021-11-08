class Student {
    private _firstname: string;
    private _lastname: string;
    private _age: number;

    constructor(theFirst: string, theSecond: string, age: number) {
        this._firstname = theFirst;
        this._lastname = theSecond;
        this._age = age;
    }

    public get firstname(): string {
        return this._firstname;
    }

    public set firstname(value: string) {
        this._firstname = value;
    }
}

let customer = new Student("Hope", "Chijuka", 23);
console.log(customer.firstname);

