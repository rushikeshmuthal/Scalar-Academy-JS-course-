// //shift and unshift methods for array
// //shift -> it will remove the one array element from start
// //unshift -> it will add the one array element at the start of array
// //push -> it will add the one array element at the end of array
// //pop -> it will remove the one array element from the end of array


// var arr1 = [1,4,2,6,3,5]
// console.log(arr1);
// var b = arr1.shift()
// console.log("shifted arr" );
// console.log(arr1);
// var c = arr1.unshift(55)
// console.log(arr1);

//for in loop
// it is used for array as well as for objects

var sampleobj = {
    name: "Rushi",
    age : 28,
    city : "Pune" ,
    favouriteColors: ["red", "yellow", "green"]
}
for ( element in sampleobj){
    console.log(`${element}->${sampleobj[element]}`);
}

//for in loop for array
var samplearr = [1,5,7,23]
for(var element in samplearr){
    console.log(`index=${element}, value=${samplearr[element]}`);
}

// for of loop
// arrays
var samplearr = [1,4,6,7]
for(var element of samplearr){
    console.log(element);
}
// // strings
// // along with index of each element/string

var samplearrS = ["red",'blue','green']
for(var [index, color] of samplearrS.entries()){
    console.log(`color=${color}, index=${index}`);

}

//Hoisting in js -
//JavaScript Hoisting refers to the process whereby 
// the interpreter appears to move the declaration of 
// functions, variables, classes, or imports to the 
// top of their scope, prior to execution of the code.

// 
// Destructuring
//destructuring arrays

// let arr=["I",'am','developer']

// let [a,b,c] = arr

// console.log(c);

// object destructuring

// let myObj ={
//     Name: "adam",
//     age: 23,
//     gender: "male",
//     address: {
//         city:'london',
//         country:"UK",
//         pincode:560098,
//     }
// }

//initialy destructured names should be same as names defined in object

// let {Name, age,gender,address:{city,country,pincode}}=myObj
// console.log(Name,age, gender, city,country,pincode);

//custom destructured names

// let {name: n , age : a,gender : g,address:{city : ct,country : cy,pincode :pc}}=myObj
// console.log(n, a , g, ct, cy,pc);


//default values for destucturing

// let myObj ={}

//  let {name="noName", age=24,gender="unknown"}=myObj
//  console.log(name, age , gender );

// Modules and Modularity 
