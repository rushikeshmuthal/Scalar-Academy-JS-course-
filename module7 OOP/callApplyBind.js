//function within object for call,apply and bind
// let person ={
//        fullname:function(city, country){
//         console.log(`hii, my name is ${this.firstname} ${this.lastname}, my age is ${this.age}, I am from
//${city}, ${country}`);

//     }
// }



// let person1 = {
//     firstname: "Tony",
//     lastname: "stark",
//     age: 40
// }

//call
// person.fullname.call(person1,"New York", "United Kingdom")
//apply
// person.fullname.apply(person1,["New York", "United Kingdom"])

//bind

// let a  =person.fullname.bind(person1,"New York", "United Kingdom")
// a()


let fullname = function(city , country){
    console.log(`hii, my name is ${this.firstname} ${this.lastname}, my age is ${this.age}, I am from
${city}, ${country}`);

}

let person2 = {
    firstname: "Tony",
    lastname: "stark",
    age: 40
}
fullname.call(person2, "New York", "United Kingdom")
//in apply arguments passed are in the from of array , that is the only differnce between call and apply
fullname.apply(person2,[  "New York", "United Kingdom"])

//using bind we can store function call in variable, and call that variable later on, and this cannot
//be done with call or apply as they directly execute the function
let b = fullname.bind(person2, "New York", "United Kingdom")
b()
