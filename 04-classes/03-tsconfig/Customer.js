"use strict";
var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        // public getFirstName(): string {
        //     return this._firstName;
        // }
        get: function () {
            return this._firstName;
        },
        // public setFirstName(firstName: string) {
        // this._firstName = firstName;
        // }
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        // public getLastName(): string {
        //     return this._lastName;
        // }
        get: function () {
            return this._lastName;
        },
        // public setLastName(lastName: string) {
        //     this._lastName = lastName;
        // }
        set: function (lastName) {
            this._lastName = lastName;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Marco", "Scheuerer");
myCustomer.firstName = "Helene";
myCustomer.lastName = "Engel";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
