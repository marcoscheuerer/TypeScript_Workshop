class Customer {
    // Attributes for traditional approach of constructor 
    // - Property names begin with underscore by convention
    //private _firstName: string;
    //private _lastName: string;

    // Traditional approach of constructor
    //constructor(theFirst: string, theLast: string) {
    //   this._firstName = theFirst;
    //   this._lastName = theLast;
    //}

    // Short cut of constructor
    constructor(private _firstName: string, private _lastName: string) { 
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(firstName: string) {
        this._firstName = firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(lastName: string) {
        this._lastName = lastName;
    }

}

let myCustomer = new Customer("Marco", "Scheuerer");

myCustomer.firstName = "Helene";
myCustomer.lastName = "Engel";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);