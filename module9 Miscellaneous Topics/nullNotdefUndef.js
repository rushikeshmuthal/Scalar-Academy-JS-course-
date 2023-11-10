//undefined 
// A variable that has not been assigned a value is of type undefined.
// A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. 
// A function returns undefined if a value was not returned.
//in an array containing empty value, the default value of that empty value is undefined

let a;
console.log(a); // output - undefined

let arr = [1,2, ,4]
console.log(arr[2]); // output - undefined

function sum(a,b) {
    let c = a + b
}
console.log(sum(1,2)) // output - undefined

// null -> null is a data type which we assign to a variable explicitly

let x = null
console.log(x); // output -> null

//not defined
// A not defined error is when we did not declare the variable and tried to call that variable.

console.log(y); //output -> error of y is not defined