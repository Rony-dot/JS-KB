// with let: variables value can be changed
let name = "Rony"
console.log(name);
name = "Rakibul";
console.log(name)

// with const: value can't be changed
const age = 23
console.log(age)
// can't be changed
// age = 44
// console.log(age)

// But But But: Object values can be changed 
const user = {
    name : "Rony",
    age : 24
}
console.log(user)

// but object value can be changed
user.name = "Rakibul"
console.log(user)

// const with array
const arr = []
console.log(arr)
arr.push("hiii")
console.log(arr)
arr.push(99)
console.log(arr)