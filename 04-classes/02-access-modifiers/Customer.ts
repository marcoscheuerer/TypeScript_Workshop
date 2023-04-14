class Customer {
    // Attributes - Property names begin with underscore by convention
    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    // public getFirstName(): string {
    //     return this._firstName;
    // }

    public get firstName(): string {
        return this._firstName;
    }

    // public setFirstName(firstName: string) {
    // this._firstName = firstName;
    // }

    public set firstName(firstName: string) {
        this._firstName = firstName;
    }

    // public getLastName(): string {
    //     return this._lastName;
    // }

    public get lastName(): string {
        return this._lastName;
    }

    // public setLastName(lastName: string) {
    //     this._lastName = lastName;
    // }

    public set lastName(lastName: string) {
        this._lastName = lastName;
    }

}

let myCustomer = new Customer("Marco", "Scheuerer");

myCustomer.firstName = "Helene";
myCustomer.lastName = "Engel";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);