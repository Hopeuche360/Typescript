class Customer {
    firstname: string;
    lastname: string;
    age: number;

    constructor(theFirst: string, theSecond: string, age: number) {
        this.firstname = theFirst;
        this.lastname = theSecond;
        this.age = age;
    }
}

//create an instance of the customer class

let myCustomer = new Customer("Hope", "Chijuka", 23);
console.log(myCustomer);