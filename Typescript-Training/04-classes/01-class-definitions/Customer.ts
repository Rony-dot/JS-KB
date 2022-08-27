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

class Customer{
    firstName : string
    lastName : string
    constructor(theFirstName : string, theLastName: string){
        // using "this."" keyword is mandatory here
        this.firstName = theFirstName
        this.lastName = theLastName
    }
}

let customer = new Customer("rakibul","rony")
customer.firstName = "rakibul hassan"
customer.lastName = "rony"

console.log(customer.firstName)
console.log(customer.lastName)