// #_________01_Primitive : ___________#
// chaning a value of an primitive type doesn't affect ot it's reference type
let a = 20
b = a
console.log(a,b) // 20, 20
a = 30
console.log(a,b) // 30, 20

//#_____________02_Reference :________#
// Both a and b points to the same address of the value:100, 
// so by changing the value of a, changes the actual value of the address's value:100 to value:99; 
// so it affects all the objects that refers to this address of the value

a = {value : 100}
b = a;
console.log(a,b) // 100, 100
a.value = 99
console.log(a,b) // 99, 99

var aa = [1,2,3];  // Initialize a variable to refer to an array
var bb = aa;        // Copy that reference into a new variable
aa[0] = 99;        // Modify the array using the original reference
console.log(bb);         // Display the changed array [99,2,3] using the new reference


// With Functions:
let passme = "Alan"
function checkit(value){
    passme = "peter"
    console.log("inside function: ",passme)
}
checkit(passme)
console.log(passme)

// objects 
let user = {name:"RONYYYY"}
function changeme(objs){
    user.name = "Rakibulllll"
    console.log("inside function", user)
}
changeme(user);
console.log(user)