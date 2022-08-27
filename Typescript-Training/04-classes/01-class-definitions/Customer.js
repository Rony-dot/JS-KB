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
        this.firstName = theFirstName;
        this.lastName = theLastName;
    }
    return Customer;
}());
var customer = new Customer("rakibul", "rony");
customer.firstName = "rakibul hassan";
customer.lastName = "rony";
console.log(customer.firstName);
console.log(customer.lastName);
