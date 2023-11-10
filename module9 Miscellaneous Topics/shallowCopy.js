//in shallow copy we use spread operator

let firstPerson = {
    name: 'Swaraj',
    age: 23,
    address: {
        city: "mumbai",
        state: 'Maharashtra'
    }
}

let seconPeron = {...firstPerson}

seconPeron.name = "Ketan"
// console.log(firstPerson);
// console.log(seconPeron)

// output - 
// {
//     name: 'Swaraj',
//     age: 23,       
//     address: { city: 'mumbai', state: 'Maharashtra' }
//   }
//   {
//     name: 'Ketan',
//     age: 23,
//     address: { city: 'mumbai', state: 'Maharashtra' }
//   }

seconPeron.address.city = "Delhi"

console.log(firstPerson);
console.log(seconPeron);

//output - 
//   {
//     name: 'Swaraj',
//     age: 23,
//     address: { city: 'Delhi', state: 'Maharashtra' }
//   }
//   {
//     name: 'Ketan',
//     age: 23,
//     address: { city: 'Delhi', state: 'Maharashtra' }
//   }

//in shallow copy if we change the nested object property through another variable(secondPeson),
//  it also reflects in main variable(firstPeron)