var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("Marco", "Scheuerer");
myCustomer.firstName = "Helene";
myCustomer.lastName = "Engel";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
