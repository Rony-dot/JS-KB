// Accessors are only available when targeting ECMAScript 5 and higher.
// to use accessors => {get, set} we mus use the flag --target ES5
// tsc --target ES5 --noEmitOnError Customer.ts 

class Customer{
    private _firstName : string;
    private _lastName : string;
    constructor(theFirstName : string, theLastName: string){
        // using "this."" keyword is mandatory here
        this._firstName = theFirstName;
        this._lastName = theLastName;
    }
    public get firstName() : string{
        return this._firstName;
    }
    public set firstName(value : string){
        this._firstName = value
    }
    public get lastName() : string{
        return this._lastName;
    }
    public set lastName(value : string){
        this._lastName = value
    }
}

let customer = new Customer("rakibul","rony")
customer.firstName = "rakibul hassan"
customer.lastName = "rony"

console.log(customer.firstName)
console.log(customer.lastName)