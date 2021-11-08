export class Student {

    constructor(private _firstname: string, private _lastname: string, private _age: number) {
    
    }

    public get firstname(): string {
        return this._firstname;
    }

    public set firstname(value: string) {
        this._firstname = value;
    }
}

// let customer = new Student("Hope", "Chijuka", 23);
// console.log(customer.firstname);

