function person(_name,_age){
    this.name = _name;
    this.age = _age;

    
}

person.prototype.getName = function(){
    console.log(`name: ${this.name} , age: ${this.age}`);
}

let person1 = new person("adam", 34)
let person2 = new person("rushi", 23)
console.log(person1);
console.log(person2);