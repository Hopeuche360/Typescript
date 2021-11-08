var Student = /** @class */ (function () {
    function Customer(theFirst, theSecond, age) {
        this.firstname = theFirst;
        this.lastname = theSecond;
        this.age = age;
    }
    return Customer;
}());
//create an instance of the customer class
var myCustomer = new Student("Hope", "Chijuka", 23);
console.log(myCustomer);
