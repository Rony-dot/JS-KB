//_______Operations______
const num1 = 8
const num2 = 6
let val 
// addition
val = num1 + num2 // 14
// subtraction
val = num1 - num2 // 2
// multiplication
val = num1 * num2 // 48
// division
val = num1 / num2 // 1.3333
// modulas (reminder)
val = num1 % num2 // 2

//______Math Objects______
val = Math.PI // 3.1416...
val = Math.round(8.7) // 9
val = Math.round(8.1) // 8
val = Math.pow(8,2) // 64
val = Math.sqrt(64) // 8
val = Math.abs(-4) // 4
val = Math.ceil(8.1) // 9
val = Math.floor(8.9) // 8
val = Math.min(12,3,9,2) // 2
val = Math.max(12,3,9,2) // 12

//______Math.random()_______
// returns a random number between 0 (inclusive) and 1 (exclusive);
val = Math.random() // a random value 0<=val<1
val = Math.floor(Math.random() * 5 + 1)
val = Math.floor(10+Math.random()*10+1) // range of 10 to 20

console.log(val)