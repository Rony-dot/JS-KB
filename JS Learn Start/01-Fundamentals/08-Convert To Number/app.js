let val
// string to Number
val = '8'
val = Number(val)

// boolean to Number
val = true
val = false
val = Number(val)
// both false and null is 0
vak = null
val = Number(val)
// More on this
val = 'Alan'
val = Number(val) // NaN
val = [1,2,3]
val = Number(val) // NaN
val = '12.34' // val.toFixed() is not a function
val = parseInt('12.34') // 12
val = parseFloat('12.44') // 12.44

console.log(val)
console.log('type is :', typeof val)
console.log(val.toFixed(2))

//__________With const_________
// normal add operation
const num1 = 8
const num2 = 12
const sum = num1 + num2 // 20
console.log(sum)

// concates string with number: appends them
const num3 = '8'
const num4 = 12
const sum2 = num3 + num4 // 812

console.log(sum2)
