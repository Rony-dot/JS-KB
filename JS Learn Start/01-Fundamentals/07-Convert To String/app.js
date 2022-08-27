// number to String
let val
val = 999
val = String(val)

console.log(val) // 999
console.log(typeof val) // string
console.log(val.length) // 3

// boolean to string
val = true
val = String(val)

console.log(val) // 999
console.log(typeof val) // string
console.log(val.length) // 4
// date to string
val = new Date()
val = String(val) // same as below line
val = val.toString()

console.log(val) // Sun Aug 28 2022 01:39:21 GMT+0600 (Bangladesh Standard Time)
console.log(typeof val) // string
console.log(val.length) // 60
// Array to string
val = [12,33,0]
val = val.toString()

console.log(val)
console.log(typeof val)
console.log(val.length)