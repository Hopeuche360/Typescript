"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(_firstname, _lastname, _age) {
        this._firstname = _firstname;
        this._lastname = _lastname;
        this._age = _age;
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
exports.Student = Student;
// let customer = new Student("Hope", "Chijuka", 23);
// console.log(customer.firstname);
