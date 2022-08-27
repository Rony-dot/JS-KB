//## primitive
// undefined
let item //type undefined
// String
item = "hello world" // type string
// Number
item = 123 // type number
// Boolean
item = true // type boolean
// Null
item = null // bug: says object, but it's an primitive type
// Symbol
item = Symbol() // type symbol
//## Reference type
// array
item = [12,"hi", 3.4, false]; // type object
// object //type object
item = {
    username: "rony"
}
// date
item = new Date() // type object
console.log('type', typeof item)