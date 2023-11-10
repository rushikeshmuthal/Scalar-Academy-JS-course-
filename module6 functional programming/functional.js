// Impure functions
// in impure functions output depends on the external factor even though the input to function is same for 
//every function call
// let a = 10;
// function addImpure(x){
//     console.log(x+a);
// }
// addImpure(2) //output - 12
// a = 3;
// addImpure(2) //output - 5

//pure functions
// in pure functions output of function remains same for same input, dispite of how much times we call it

function addPure(x,a){
    console.log(x +a);
}

addPure(4,5) // output -9
addPure(4,5) // output -9

