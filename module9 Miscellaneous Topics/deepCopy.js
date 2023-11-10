// for deep copy of object we use JSON.pasre() and JSON.Stringify() methods

let firstPerson = {
    name: 'Swaraj',
    age: 23,
    address: {
        city: "mumbai",
        state: 'Maharashtra'
    }
}

let secondPeson = JSON.parse(JSON.stringify(firstPerson)) // firstPerson

console.log('secondPerson : ', secondPeson)
console.log('firstPerson : ', firstPerson)
