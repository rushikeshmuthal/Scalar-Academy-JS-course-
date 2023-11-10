// method inheritance - methods of the parent calss can also be inherited
class Person {
    constructor(_name, _age){

        this.name = _name;
        this.age = _age;
    }
    welcome(){
        console.log(`Welcome ${this.name}`);
    }
}

class Teacher extends Person {
    constructor(_name,_age,_classStrength){
        super(_name,_age); 
        this.classStrength = _classStrength
    }
    test(){
        super.welcome()
    }
}



let teacher1 = new Teacher("rahul",24, 50)
teacher1.test()
//output - welcome rahul
