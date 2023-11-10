//encapsulation means hiding the implementation details which are inside the functions to 
//remove unothorized access to manipulate the code within the function


function person (_name, _age){
    var name  = _name
    this.age= _age
    this.getName = function(){
        return name;
    }
}

let person1 = new person('adam',23);

console.log(person1.getName())