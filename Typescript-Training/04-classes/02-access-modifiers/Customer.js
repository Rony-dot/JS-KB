// if you want not to generate a js file if, 
// there is an compile error then compile using below=>
// tsc -noEmitOnError Customer.ts
/*
class Customer{
    firstName : string
    lastName : string
}

let customer = new Customer()
customer.firstName = "rakibul hassan"
customer.lastName = "rony"

console.log(customer.firstName)
console.log(customer.lastName)
*/
// using a constructor
var Customer = /** @class */ (function () {
    function Customer(theFirstName, theLastName) {
        // using "this."" keyword is mandatory here
        this._firstName = theFirstName;
        this._lastName = theLastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var customer = new Customer("rakibul", "rony");
customer.firstName = "rakibul hassan";
customer.lastName = "rony";
console.log(customer.firstName);
console.log(customer.lastName);
