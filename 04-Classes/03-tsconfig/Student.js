"use strict";
var Student = /** @class */ (function () {
    function Student(theFirst, theSecond, age) {
        this._firstname = theFirst;
        this._lastname = theSecond;
        this._age = age;
    }
    Object.defineProperty(Student.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            this._firstname = value;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var customer = new Student("Hope", "Chijuka", 23);
console.log(customer.firstname);
