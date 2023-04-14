class Customer {
    // Attributes - Property names begin with underscore by convention
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    
}

let myCustomer = new Customer("Marco", "Scheuerer");

myCustomer.firstName = "Helene";
myCustomer.lastName = "Engel";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);